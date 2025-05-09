"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "../ui/Button"

export function CookieSettings({ isOpen, onClose, onSave, initialSettings }) {
  // State für die Cookie-Einstellungen im Modal
  const [settings, setSettings] = useState({
    necessary: true, // Immer aktiviert
    functional: false,
    analytics: false,
    marketing: false,
  })

  // Beim Öffnen des Modals die aktuellen Einstellungen laden
  useEffect(() => {
    if (isOpen && initialSettings) {
      setSettings(initialSettings)
    }
  }, [isOpen, initialSettings])

  // Funktion zum Ändern einer Einstellung
  const handleChange = (category) => {
    if (category === "necessary") return // Notwendige Cookies können nicht deaktiviert werden

    setSettings((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Wenn das Modal nicht geöffnet ist, nichts rendern
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg border border-border/40 bg-background p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Cookie-Einstellungen</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Schließen"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground">
            Hier können Sie einstellen, welche Cookies Sie auf unserer Website zulassen möchten. Bitte beachten Sie,
            dass einige Cookies notwendig sind, damit unsere Website ordnungsgemäß funktioniert.
          </p>
        </div>

        <div className="space-y-4">
          {/* Notwendige Cookies */}
          <div className="rounded-lg border border-border/40 p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="necessary"
                  checked={settings.necessary}
                  disabled
                  className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
                />
                <label htmlFor="necessary" className="ml-2 font-medium">
                  Notwendige Cookies
                </label>
              </div>
              <span className="text-xs text-primary">Immer aktiv</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.
            </p>
          </div>

          {/* Funktionale Cookies */}
          <div className="rounded-lg border border-border/40 p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="functional"
                  checked={settings.functional}
                  onChange={() => handleChange("functional")}
                  className="h-4 w-4 cursor-pointer rounded border-border bg-background text-primary focus:ring-primary"
                />
                <label htmlFor="functional" className="ml-2 cursor-pointer font-medium">
                  Funktionale Cookies
                </label>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. Spracheinstellungen oder
              Formulardaten zu speichern.
            </p>
          </div>

          {/* Statistik / Analyse Cookies */}
          <div className="rounded-lg border border-border/40 p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={settings.analytics}
                  onChange={() => handleChange("analytics")}
                  className="h-4 w-4 cursor-pointer rounded border-border bg-background text-primary focus:ring-primary"
                />
                <label htmlFor="analytics" className="ml-2 cursor-pointer font-medium">
                  Statistik / Analyse Cookies
                </label>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Daten
              sammeln und melden. Sie helfen uns, die Website zu verbessern.
            </p>
          </div>

          {/* Marketing Cookies */}
          <div className="rounded-lg border border-border/40 p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={settings.marketing}
                  onChange={() => handleChange("marketing")}
                  className="h-4 w-4 cursor-pointer rounded border-border bg-background text-primary focus:ring-primary"
                />
                <label htmlFor="marketing" className="ml-2 cursor-pointer font-medium">
                  Marketing Cookies
                </label>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu
              zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={onClose}>
            Abbrechen
          </Button>
          <Button
            className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20"
            onClick={() => onSave(settings)}
          >
            Einstellungen speichern
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CookieSettings
