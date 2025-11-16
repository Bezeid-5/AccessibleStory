import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import StoryPlayerPage from './pages/StoryPlayerPage'
import AboutAccessibilityPage from './pages/AboutAccessibilityPage'
import AboutUsPage from './pages/AboutUsPage'
import './styles.css'

/**
 * Composant principal de l'application
 * Configure le routage et le contexte d'accessibilité
 */
function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="story" element={<StoryPlayerPage />} />
            <Route path="accessibilite" element={<AboutAccessibilityPage />} />
            <Route path="a-propos" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </Router>
    </AccessibilityProvider>
  )
}

export default App

