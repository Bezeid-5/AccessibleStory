import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Composant de navigation mobile avec sidebar
 * Affiche un menu hamburger sur les petits écrans
 */
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Fermer la sidebar lors du changement de route
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Fermer la sidebar avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Empêcher le scroll du body quand la sidebar est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/story', label: 'Lire une histoire' },
    { path: '/accessibilite', label: 'Accessibilité' },
    { path: '/a-propos', label: 'À propos de nous' }
  ]

  return (
    <>
      {/* Bouton hamburger */}
      <button
        className="mobile-nav-toggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar"
      >
        <span className="hamburger-icon" aria-hidden="true">
          <span className={isOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        </span>
      </button>

      {/* Overlay (fond sombre) */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <nav
        id="mobile-sidebar"
        className={`mobile-sidebar ${isOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Navigation mobile"
      >
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        </div>

        <ul className="sidebar-nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MobileNav

