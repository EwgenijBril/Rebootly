"use client"

import { useState, useEffect } from "react"

// Cookie-Kategorien mit Standardwerten
const defaultCookiePreferences = {
  necessary: true, // Immer aktiviert
  functional: false,
  analytics: false,
  marketing: false,
}

export function useCookieConsent() {
  // State für die Cookie-Einstellungen
  const [cookieConsent, setCookieConsent] = useState(defaultCookiePreferences)

  // State für die Anzeige des Banners
  const [showBanner, setShowBanner] = useState(false)

  // State für die Anzeige des Einstellungs-Modals
  const [showSettings, setShowSettings] = useState(false)

  // Beim ersten Laden prüfen, ob bereits Cookie-Einstellungen vorhanden sind
  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent")

    if (storedConsent) {
      // Wenn Einstellungen vorhanden sind, diese laden
      setCookieConsent(JSON.parse(storedConsent))
    } else {
      // Wenn keine Einstellungen vorhanden sind, Banner anzeigen
      setShowBanner(true)
    }

    // Event-Listener für das Öffnen der Cookie-Einstellungen über den Footer-Link
    const handleOpenSettings = () => {
      setShowSettings(true)
    }

    window.addEventListener("openCookieSettings", handleOpenSettings)

    return () => {
      window.removeEventListener("openCookieSettings", handleOpenSettings)
    }
  }, [])

  // Funktion zum Akzeptieren aller Cookies
  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }

    setCookieConsent(allAccepted)
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setShowBanner(false)
    setShowSettings(false)

    // Hier könnten Funktionen zum Aktivieren der entsprechenden Cookies aufgerufen werden
    applyConsent(allAccepted)
  }

  // Funktion zum Akzeptieren nur der notwendigen Cookies
  const acceptNecessaryCookies = () => {
    setCookieConsent(defaultCookiePreferences)
    localStorage.setItem("cookieConsent", JSON.stringify(defaultCookiePreferences))
    setShowBanner(false)
    setShowSettings(false)

    // Hier könnten Funktionen zum Aktivieren der entsprechenden Cookies aufgerufen werden
    applyConsent(defaultCookiePreferences)
  }

  // Funktion zum Speichern der individuellen Einstellungen
  const saveSettings = (settings) => {
    setCookieConsent(settings)
    localStorage.setItem("cookieConsent", JSON.stringify(settings))
    setShowBanner(false)
    setShowSettings(false)

    // Hier könnten Funktionen zum Aktivieren der entsprechenden Cookies aufgerufen werden
    applyConsent(settings)
  }

  // Funktion zum Anwenden der Cookie-Einstellungen
  const applyConsent = (settings) => {
    // Hier würde die tatsächliche Implementierung erfolgen, um Cookies zu aktivieren/deaktivieren
    console.log("Cookie-Einstellungen angewendet:", settings)

    // Beispiel: Google Analytics nur aktivieren, wenn analytics=true
    if (settings.analytics) {
      // Google Analytics aktivieren
    } else {
      // Google Analytics deaktivieren
    }
  }

  // Funktion zum Öffnen der Einstellungen
  const openSettings = () => {
    setShowSettings(true)
    setShowBanner(false)
  }

  // Funktion zum Schließen der Einstellungen
  const closeSettings = () => {
    setShowSettings(false)

    // Wenn noch keine Einstellungen gespeichert wurden, Banner wieder anzeigen
    if (!localStorage.getItem("cookieConsent")) {
      setShowBanner(true)
    }
  }

  return {
    cookieConsent,
    showBanner,
    showSettings,
    acceptAllCookies,
    acceptNecessaryCookies,
    saveSettings,
    openSettings,
    closeSettings,
  }
}

export default useCookieConsent
