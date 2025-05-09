import { useState, useEffect } from "react"
import LandingPage from "./components/LandingPage"
import DataProtection from ".//components/pages/DataProtection"
import Imprint from "./components/pages/Imprint"
import CookieBanner from "./components/sections/CookieBanner"

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // Listen for popstate event (browser back/forward buttons)
    window.addEventListener("popstate", handleLocationChange)

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
    }
  }, [])

  // Simple routing
  const navigate = (path) => {
    window.history.pushState({}, "", path)
    setCurrentPath(path)
  }

  // Make navigate function available globally
  window.navigate = navigate

  // Render the appropriate component based on the current path
  const renderContent = () => {
    switch (currentPath) {
      case "/data-protection":
        return <DataProtection />
      case "/imprint":
        return <Imprint />
      default:
        return <LandingPage />
    }
  }

  return (
    <>
      {renderContent()}
      <CookieBanner />
    </>
  )
}

export default App
