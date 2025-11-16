import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAccessibility } from '../context/AccessibilityContext'
import AccessibilityBar from './AccessibilityBar'

/**
 * Layout principal de l'application
 * Gère la navigation, la barre d'accessibilité et applique les préférences d'accessibilité
 */
const Layout = () => {
  const { fontSize, highContrast, dyslexiaFont } = useAccessibility()
  const location = useLocation()

  // Appliquer les styles d'accessibilité dynamiquement
  const appClasses = ['app']
  if (highContrast) {
    appClasses.push('app-high-contrast')
  }
  if (dyslexiaFont) {
    appClasses.push('app-dyslexia')
  }

  // Style inline pour la taille de police
  const style = {
    fontSize: `${fontSize}px`
  }

  return (
    <div className={appClasses.join(' ')} style={style}>
      {/* Lien d'évitement pour la navigation au clavier */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* En-tête avec navigation */}
      <header className="header" role="banner">
        <h1 className="header-title">
          <Link to="/" aria-label="AccessibleStory - Page d'accueil">
            AccessibleStory
          </Link>
        </h1>
        <nav className="nav" role="navigation" aria-label="Navigation principale">
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/story"
                className={location.pathname === '/story' ? 'active' : ''}
                aria-current={location.pathname === '/story' ? 'page' : undefined}
              >
                Lire une histoire
              </Link>
            </li>
            <li>
              <Link
                to="/accessibilite"
                className={location.pathname === '/accessibilite' ? 'active' : ''}
                aria-current={location.pathname === '/accessibilite' ? 'page' : undefined}
              >
                Accessibilité
              </Link>
            </li>
            <li>
              <Link
                to="/a-propos"
                className={location.pathname === '/a-propos' ? 'active' : ''}
                aria-current={location.pathname === '/a-propos' ? 'page' : undefined}
              >
                À propos de nous
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Barre d'accessibilité */}
      <AccessibilityBar />

      {/* Contenu principal */}
      <main id="main-content" className="main" role="main">
        <Outlet />
      </main>

      {/* Pied de page */}
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <p>
            AccessibleStory - Une application accessible pour lire des histoires.
            Développée avec un numérique responsable au service de l'humain.
          </p>
          <div className="footer-contact">
            <p>
              <a href="mailto:AccessStory@gmail.com" aria-label="Envoyer un email à AccessStory@gmail.com">
                📧 AccessStory@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+22236212585" aria-label="Appeler le numéro +222 36212585">
                📞 +222 36212585
              </a>
            </p>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} AccessibleStory. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

