import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { splitStoryText } from '../utils/splitStoryText'
import AudioControls from '../components/AudioControls'

/**
 * Page de lecture d'histoire
 * Permet de coller un texte ou d'importer un fichier, puis de lire l'histoire scène par scène
 */
const StoryPlayerPage = () => {
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode') || 'coller' // 'coller' ou 'importer'

  const [rawText, setRawText] = useState('')
  const [scenes, setScenes] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [error, setError] = useState('')
  const [showFileInput, setShowFileInput] = useState(mode === 'importer')
  const readingSectionRef = useRef(null)
  const inputSectionRef = useRef(null)

  // Basculer vers l'affichage du fichier si le mode change
  useEffect(() => {
    setShowFileInput(mode === 'importer')
  }, [mode])

  // Gérer l'import de fichier
  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    // Vérifier que c'est un fichier texte
    if (!file.name.endsWith('.txt') && !file.type.startsWith('text/')) {
      setError('Veuillez sélectionner un fichier .txt')
      return
    }

    const reader = new FileReader()
    
    reader.onload = (e) => {
      const content = e.target?.result
      if (typeof content === 'string') {
        setRawText(content)
        setError('')
      } else {
        setError('Erreur lors de la lecture du fichier')
      }
    }

    reader.onerror = () => {
      setError('Erreur lors de la lecture du fichier')
    }

    reader.readAsText(file, 'UTF-8')
  }

  // Charger l'histoire
  const handleLoadStory = () => {
    setError('')
    
    if (!rawText.trim()) {
      setError('Veuillez coller un texte ou importer un fichier')
      return
    }

    const newScenes = splitStoryText(rawText)
    
    if (newScenes.length === 0) {
      setError('Aucune scène trouvée dans le texte. Assurez-vous que le texte contient au moins un paragraphe.')
      setScenes([])
      setCurrentIndex(0)
      return
    }

    setScenes(newScenes)
    setCurrentIndex(0)
    
    // Faire défiler vers la section de lecture après un court délai pour laisser le DOM se mettre à jour
    setTimeout(() => {
      if (readingSectionRef.current) {
        readingSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }

  // Navigation entre les scènes
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < scenes.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  // Recommencer l'histoire depuis le début
  const handleRestart = () => {
    setCurrentIndex(0)
    // Faire défiler vers le haut de la section de lecture
    if (readingSectionRef.current) {
      readingSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }

  // Terminer et retourner à la section principale
  const handleFinish = () => {
    // Afficher une belle alerte de confirmation
    Swal.fire({
      title: 'Histoire terminée !',
      html: `
        <p>Merci d'avoir lu cette histoire avec AccessibleStory.</p>
        <p>Vous allez être redirigé vers la section principale pour charger une nouvelle histoire.</p>
      `,
      icon: 'success',
      iconColor: '#324db0',
      confirmButtonText: 'D\'accord',
      confirmButtonColor: '#324db0',
      background: '#ffffff',
      color: '#333',
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-custom-title',
        htmlContainer: 'swal-custom-html',
        confirmButton: 'swal-custom-button'
      }
    }).then(() => {
      // Réinitialiser l'état pour permettre de charger une nouvelle histoire
      setRawText('')
      setScenes([])
      setCurrentIndex(0)
      setError('')
      
      // Faire défiler vers la section d'entrée
      setTimeout(() => {
        if (inputSectionRef.current) {
          inputSectionRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 100)
    })
  }

  // Gérer les raccourcis clavier pour la navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignorer si l'utilisateur tape dans un champ de texte
      if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
        return
      }

      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1)
      } else if (event.key === 'ArrowRight' && currentIndex < scenes.length - 1) {
        setCurrentIndex(prev => prev + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, scenes.length])

  const currentScene = scenes[currentIndex] || ''

  return (
    <div className="story-player-page">
      <h1>Lire une histoire</h1>

      {/* Zone d'entrée */}
      <section 
        ref={inputSectionRef}
        className="input-section" 
        aria-label="Zone d'entrée de l'histoire"
      >
        <h2>Entrer votre histoire</h2>
        
        {!showFileInput ? (
          <div className="input-group">
            <label htmlFor="story-textarea" className="label">
              Collez votre texte ici
            </label>
            <textarea
              id="story-textarea"
              value={rawText}
              onChange={(e) => {
                setRawText(e.target.value)
                setError('')
              }}
              rows={10}
              cols={80}
              aria-describedby="textarea-help"
              className="textarea"
            />
            <p id="textarea-help" className="help-text">
              Vous pouvez séparer les scènes avec des lignes vides (double retour à la ligne).
            </p>
          </div>
        ) : (
          <div className="input-group">
            <label htmlFor="file-input" className="label">
              Importez un fichier .txt
            </label>
            <input
              id="file-input"
              type="file"
              accept=".txt,text/plain"
              onChange={handleFileChange}
              aria-describedby="file-help"
              className="file-input"
            />
            <p id="file-help" className="help-text">
              Sélectionnez un fichier texte (.txt) à importer.
            </p>
            {rawText && (
              <div className="preview-text">
                <p className="preview-label">Aperçu du texte :</p>
                <textarea
                  readOnly
                  value={rawText}
                  rows={5}
                  className="textarea"
                  aria-label="Aperçu du texte importé"
                />
              </div>
            )}
          </div>
        )}

        {/* Option pour basculer entre les modes */}
        <div className="mode-toggle">
          <button
            onClick={() => {
              setShowFileInput(false)
              setRawText('')
              setError('')
            }}
            className={`btn btn-small ${!showFileInput ? 'active' : ''}`}
            aria-pressed={!showFileInput}
          >
            Mode: Coller
          </button>
          <button
            onClick={() => {
              setShowFileInput(true)
              setRawText('')
              setError('')
            }}
            className={`btn btn-small ${showFileInput ? 'active' : ''}`}
            aria-pressed={showFileInput}
          >
            Mode: Importer
          </button>
        </div>

        {error && (
          <div role="alert" aria-live="polite" className="error-message">
            {error}
          </div>
        )}

        <button
          onClick={handleLoadStory}
          className="btn btn-primary"
          aria-label="Charger l'histoire à partir du texte fourni"
        >
          Charger l'histoire
        </button>
      </section>

      {/* Zone de lecture */}
      <section 
        ref={readingSectionRef}
        className="reading-section" 
        aria-label="Zone de lecture"
      >
        <h2>Lecture de l'histoire</h2>
        
        {scenes.length === 0 ? (
          <div className="empty-state">
            <p>Collez un texte ou importez un fichier pour commencer.</p>
            <p className="help-text">
              Le texte sera automatiquement découpé en scènes séparées par des lignes vides.
            </p>
          </div>
        ) : (
          <>
            <div className="scene-header">
              <h3>
                Scène {currentIndex + 1} sur {scenes.length}
              </h3>
            </div>

            <div className="scene-content" role="article" aria-label={`Scène ${currentIndex + 1} sur ${scenes.length}`}>
              <p className="scene-text">{currentScene}</p>
            </div>

            <div className="scene-controls">
              <AudioControls text={currentScene} />

              <div className="navigation-buttons" role="group" aria-label="Navigation entre les scènes">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  aria-label="Scène précédente"
                  className="btn btn-secondary"
                >
                  ← Scène précédente
                </button>
                <span className="scene-counter" aria-live="polite" aria-atomic="true">
                  {currentIndex + 1} / {scenes.length}
                </span>
                {currentIndex === scenes.length - 1 ? (
                  <button
                    onClick={handleRestart}
                    aria-label="Recommencer l'histoire depuis le début"
                    className="btn btn-primary"
                  >
                    🔄 Recommencer
                  </button>
                ) : (
                  <button
                    onClick={goToNext}
                    aria-label="Scène suivante"
                    className="btn btn-secondary"
                  >
                    Scène suivante →
                  </button>
                )}
              </div>
            </div>

            <div className="keyboard-hint">
              <p className="help-text">
                💡 Astuce : Utilisez les flèches ← et → pour naviguer entre les scènes.
              </p>
            </div>

            <div className="finish-section">
              <button
                onClick={handleFinish}
                aria-label="Terminer et retourner à la section principale"
                className="btn btn-primary"
              >
                ✓ Terminer
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default StoryPlayerPage

