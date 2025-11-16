import { useState, useEffect } from 'react'

/**
 * Détecte la langue du texte
 * @param {string} text - Le texte à analyser
 * @returns {string} Code de langue (ex: 'ar', 'fr', 'en')
 */
const detectLanguage = (text) => {
  if (!text || text.trim().length === 0) {
    return 'fr' // Par défaut français
  }

  // Détection simple basée sur les caractères Unicode
  // Caractères arabes : U+0600 à U+06FF
  const arabicPattern = /[\u0600-\u06FF]/
  // Caractères français/anglais : ASCII étendu
  const latinPattern = /[a-zA-ZÀ-ÿ]/

  // Compter les caractères arabes
  const arabicCount = (text.match(/[\u0600-\u06FF]/g) || []).length
  // Compter les caractères latins
  const latinCount = (text.match(/[a-zA-ZÀ-ÿ]/g) || []).length

  // Si plus de caractères arabes, c'est de l'arabe
  if (arabicCount > latinCount && arabicPattern.test(text)) {
    return 'ar'
  }

  // Sinon, on assume français par défaut
  return 'fr'
}

/**
 * Composant pour contrôler la lecture audio d'un texte
 * Utilise la Web Speech API pour la synthèse vocale
 */
const AudioControls = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [utterance, setUtterance] = useState(null)
  const [voices, setVoices] = useState([])

  // Charger les voix disponibles
  useEffect(() => {
    const loadVoices = () => {
      if (window.speechSynthesis) {
        const availableVoices = window.speechSynthesis.getVoices()
        setVoices(availableVoices)
      }
    }

    // Charger les voix immédiatement
    loadVoices()

    // Certains navigateurs chargent les voix de manière asynchrone
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null
      }
    }
  }, [])

  // Nettoyer la lecture lors du démontage ou changement de texte
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [text])

  // Arrêter la lecture si le texte change
  useEffect(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    }
  }, [text])

  // Fonction pour trouver une voix appropriée pour la langue
  const findVoiceForLanguage = (lang) => {
    if (!voices || voices.length === 0) {
      return null
    }

    // Chercher une voix correspondant à la langue
    let voice = voices.find(voice => 
      voice.lang.toLowerCase().startsWith(lang.toLowerCase())
    )

    // Si pas de voix exacte, chercher une voix par défaut du système
    if (!voice) {
      voice = voices.find(voice => voice.default)
    }

    // Si toujours pas de voix, prendre la première disponible
    if (!voice && voices.length > 0) {
      voice = voices[0]
    }

    return voice
  }

  // Fonction pour lire le texte
  const handleRead = () => {
    if (!window.speechSynthesis || !text) {
      return
    }

    // Annuler toute lecture en cours
    window.speechSynthesis.cancel()

    // Détecter la langue du texte
    const detectedLang = detectLanguage(text)
    
    // Créer une nouvelle instance pour la lecture
    const newUtterance = new SpeechSynthesisUtterance(text)
    
    // Trouver une voix appropriée pour la langue détectée
    const selectedVoice = findVoiceForLanguage(detectedLang)
    
    if (selectedVoice) {
      newUtterance.voice = selectedVoice
      newUtterance.lang = selectedVoice.lang
    } else {
      // Fallback : utiliser le code de langue détecté
      newUtterance.lang = detectedLang === 'ar' ? 'ar-SA' : 'fr-FR'
    }
    
    newUtterance.rate = 1.0 // Vitesse normale
    newUtterance.pitch = 1.0 // Hauteur normale
    newUtterance.volume = 1.0 // Volume maximum

    // Gérer la fin de lecture
    newUtterance.onend = () => {
      setIsPlaying(false)
      setUtterance(null)
    }

    // Gérer les erreurs
    newUtterance.onerror = (event) => {
      console.error('Erreur de synthèse vocale:', event)
      setIsPlaying(false)
      setUtterance(null)
    }

    setUtterance(newUtterance)
    window.speechSynthesis.speak(newUtterance)
    setIsPlaying(true)
  }

  // Fonction pour arrêter la lecture
  const handleStop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      setUtterance(null)
    }
  }

  // Vérifier si l'API est disponible
  if (!window.speechSynthesis) {
    return (
      <div role="alert" aria-live="polite">
        <p>La synthèse vocale n'est pas disponible sur ce navigateur.</p>
      </div>
    )
  }

  return (
    <div className="audio-controls" role="group" aria-label="Contrôles audio">
      <button
        onClick={handleRead}
        disabled={isPlaying || !text}
        aria-label="Lire cette scène"
        className="btn btn-primary"
      >
        🔊 Lire cette scène
      </button>
      {isPlaying && (
        <button
          onClick={handleStop}
          aria-label="Arrêter la lecture"
          className="btn btn-secondary"
        >
          ⏹️ Arrêter la lecture
        </button>
      )}
    </div>
  )
}

export default AudioControls

