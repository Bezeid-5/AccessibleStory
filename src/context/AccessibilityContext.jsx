import { createContext, useContext, useState, useEffect } from 'react'

// Création du contexte d'accessibilité
const AccessibilityContext = createContext()

// Hook personnalisé pour utiliser le contexte
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility doit être utilisé dans un composant enveloppé par AccessibilityProvider')
  }
  return context
}

// Provider du contexte d'accessibilité
export const AccessibilityProvider = ({ children }) => {
  // État pour la taille de police (par défaut 16px)
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('accessibleStory_fontSize')
    return saved ? parseInt(saved, 10) : 16
  })

  // État pour le contraste élevé
  const [highContrast, setHighContrast] = useState(() => {
    const saved = localStorage.getItem('accessibleStory_highContrast')
    return saved === 'true'
  })

  // État pour la police lisible (dyslexie)
  const [dyslexiaFont, setDyslexiaFont] = useState(() => {
    const saved = localStorage.getItem('accessibleStory_dyslexiaFont')
    return saved === 'true'
  })

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('accessibleStory_fontSize', fontSize.toString())
  }, [fontSize])

  useEffect(() => {
    localStorage.setItem('accessibleStory_highContrast', highContrast.toString())
  }, [highContrast])

  useEffect(() => {
    localStorage.setItem('accessibleStory_dyslexiaFont', dyslexiaFont.toString())
  }, [dyslexiaFont])

  // Fonction pour augmenter la taille de police
  const increaseFont = () => {
    setFontSize(prev => Math.min(prev + 2, 32)) // Maximum 32px
  }

  // Fonction pour diminuer la taille de police
  const decreaseFont = () => {
    setFontSize(prev => Math.max(prev - 2, 12)) // Minimum 12px
  }

  // Fonction pour basculer le contraste élevé
  const toggleHighContrast = () => {
    setHighContrast(prev => !prev)
  }

  // Fonction pour basculer la police lisible
  const toggleDyslexiaFont = () => {
    setDyslexiaFont(prev => !prev)
  }

  const value = {
    fontSize,
    highContrast,
    dyslexiaFont,
    increaseFont,
    decreaseFont,
    toggleHighContrast,
    toggleDyslexiaFont
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

