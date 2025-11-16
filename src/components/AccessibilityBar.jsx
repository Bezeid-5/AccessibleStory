import { useAccessibility } from '../context/AccessibilityContext'

/**
 * Barre d'outils d'accessibilité
 * Permet de régler la taille de police, le contraste et la police lisible
 */
const AccessibilityBar = () => {
  const {
    fontSize,
    highContrast,
    dyslexiaFont,
    increaseFont,
    decreaseFont,
    toggleHighContrast,
    toggleDyslexiaFont
  } = useAccessibility()

  return (
    <section
      className="accessibility-bar"
      role="toolbar"
      aria-label="Options d'accessibilité"
    >
      <h2 className="sr-only">Options d'accessibilité</h2>
      <div className="accessibility-controls">
        {/* Contrôle de la taille de police */}
        <div className="accessibility-group" role="group" aria-label="Taille de police">
          <button
            onClick={decreaseFont}
            aria-label={`Diminuer la taille de police (actuellement ${fontSize}px)`}
            className="btn-icon"
            type="button"
          >
            A−
          </button>
          <span className="sr-only">Taille actuelle: {fontSize}px</span>
          <button
            onClick={increaseFont}
            aria-label={`Augmenter la taille de police (actuellement ${fontSize}px)`}
            className="btn-icon"
            type="button"
          >
            A+
          </button>
        </div>

        {/* Bouton contraste élevé */}
        <button
          onClick={toggleHighContrast}
          aria-pressed={highContrast}
          aria-label={highContrast ? 'Désactiver le contraste élevé' : 'Activer le contraste élevé'}
          className={`btn-toggle ${highContrast ? 'active' : ''}`}
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <span>Contraste Elevé</span>
        </button>

        {/* Bouton police lisible */}
        <button
          onClick={toggleDyslexiaFont}
          aria-pressed={dyslexiaFont}
          aria-label={dyslexiaFont ? 'Désactiver la police lisible' : 'Activer la police lisible'}
          className={`btn-toggle ${dyslexiaFont ? 'active' : ''}`}
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 20h16" />
            <path d="M6 16l6-12 6 12" />
            <path d="M8 12h8" />
          </svg>
          <span>Police lisible</span>
        </button>
      </div>
    </section>
  )
}

export default AccessibilityBar

