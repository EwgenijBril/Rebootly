"use client"

import { Button } from "../ui/Button"
import CookieSettings from "./CookieSettings"
import useCookieConsent from "../../hooks/useCookieConsent"

export function CookieBanner() {
  const {
    cookieConsent,
    showBanner,
    showSettings,
    acceptAllCookies,
    acceptNecessaryCookies,
    saveSettings,
    openSettings,
    closeSettings,
  } = useCookieConsent()

  if (!showBanner && !showSettings) return null

  return (
    <>
      {/* Cookie-Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 p-4 backdrop-blur-sm md:p-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground md:text-base">
                  Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten. Sie können selbst entscheiden,
                  welche Kategorien Sie zulassen möchten.
                </p>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessaryCookies}
                  className="border-border/40 bg-background/50 backdrop-blur-sm"
                >
                  Nur notwendige Cookies
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openSettings}
                  className="border-border/40 bg-background/50 backdrop-blur-sm"
                >
                  Einstellungen
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAllCookies}
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie-Einstellungen Modal */}
      <CookieSettings
        isOpen={showSettings}
        onClose={closeSettings}
        onSave={saveSettings}
        initialSettings={cookieConsent}
      />
    </>
  )
}

export default CookieBanner
