import { Link, useNavigate } from 'react-router-dom'

/**
 * Page d'accueil de l'application
 * Présente AccessibleStory et permet de naviguer vers la lecture d'histoire
 */
const HomePage = () => {
  const navigate = useNavigate()

  const handleCollerTexte = () => {
    navigate('/story?mode=coller')
  }

  const handleImporterFichier = () => {
    navigate('/story?mode=importer')
  }

  return (
    <div className="home-page">
      <h1>AccessibleStory</h1>
      <section className="intro-section">
        <p className="intro-text">
          Bienvenue sur AccessibleStory, une application permettant de lire des histoires
          de manière accessible et inclusive.
        </p>
        <p>
          Vous pouvez lire vos histoires avec des fonctionnalités d'accessibilité avancées,
          incluant la navigation au clavier, le réglage de la taille de texte, le mode contraste
          élevé, la police lisible et la lecture audio.
        </p>
      </section>

      <section className="actions-section" aria-label="Actions disponibles">
        <h2 className="sr-only">Choisir comment commencer</h2>
        <div className="action-buttons">
          <button
            onClick={handleCollerTexte}
            className="btn btn-primary btn-large"
            aria-label="Coller un texte pour commencer à lire une histoire"
          >
            📋 Coller un texte
          </button>
          <button
            onClick={handleImporterFichier}
            className="btn btn-primary btn-large"
            aria-label="Importer un fichier texte pour commencer à lire une histoire"
          >
            📁 Importer un fichier texte
          </button>
        </div>
      </section>

      <section className="features-section">
        <h2>Fonctionnalités d'accessibilité</h2>
        <ul className="features-list">
          <li>Navigation au clavier complète</li>
          <li>Réglage de la taille de texte</li>
          <li>Mode contraste élevé</li>
          <li>Police lisible (dyslexie)</li>
          <li>Lecture audio avec synthèse vocale</li>
          <li>Attributs ARIA pour les lecteurs d'écran</li>
        </ul>
        <p>
          <Link to="/accessibilite" className="link">
            En savoir plus sur nos choix d'accessibilité
          </Link>
        </p>
      </section>
    </div>
  )
}

export default HomePage

