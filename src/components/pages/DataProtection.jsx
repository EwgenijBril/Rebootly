import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/Button"

export function DataProtection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Button
          onClick={() => window.history.back()}
          variant="ghost"
          className="mb-8 flex items-center text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Button>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">Datenschutzerklärung</h1>

          <div className="space-y-8 rounded-lg border border-border/40 bg-background/50 p-8 backdrop-blur-sm">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">1. Datenschutz auf einen Blick</h2>
              <p className="text-muted-foreground">
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
                personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb unseres Onlineangebotes auf.
              </p>
              <div className="mt-4">
                <p className="font-medium">Verantwortlich für die Datenverarbeitung:</p>
                <p className="text-muted-foreground">
                  Rebootly
                  <br />
                  Ewgenij Bril
                  <br />
                  Marktplatz 32
                  <br />
                  72250 Freudenstadt
                  <br />
                  Deutschland
                  <br />
                  E-Mail: info@rebootly.de
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">2. Hosting</h2>
              <p className="text-muted-foreground">
                Unsere Website wird bei Vercel Inc. gehostet.
                <br />
                Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
                <br />
                Datenschutzerklärung:{" "}
                <a
                  href="https://vercel.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://vercel.com/legal/privacy
                </a>
              </p>
              <p className="mt-4 text-muted-foreground">
                Der Hoster erhebt in unserem Auftrag Daten über jeden Zugriff auf den Server (sogenannte
                Server-Logfiles). Zu den Zugriffsdaten gehören:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Besuchte Website</li>
                <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
                <li>Menge der gesendeten Daten in Byte</li>
                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Verwendete IP-Adresse (ggf. in anonymisierter Form)</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an
                der Verbesserung der Stabilität und Funktionalität unserer Website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">3. Verwendung von Google Fonts</h2>
              <p className="text-muted-foreground">
                Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google LLC, 1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
                Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              </p>
              <p className="mt-4 text-muted-foreground">
                Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen.
                Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
              </p>
              <p className="mt-4 text-muted-foreground">
                Mehr Informationen zu Google Fonts:{" "}
                <a
                  href="https://fonts.google.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://fonts.google.com/about
                </a>
                <br />
                Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">4. Einbindung von YouTube-Videos (geplant)</h2>
              <p className="text-muted-foreground">
                Wenn YouTube-Videos eingebunden werden, nutzt unsere Seite Plugins der von Google betriebenen Seite
                YouTube. Betreiber ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
              </p>
              <p className="mt-4 text-muted-foreground">
                Beim Besuch einer Seite mit eingebettetem YouTube-Video wird eine Verbindung zu den Servern von YouTube
                hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie
                in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
                persönlichen Profil zuzuordnen.
              </p>
              <p className="mt-4 text-muted-foreground">
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">5. Social Media Verlinkungen</h2>
              <p className="text-muted-foreground">Auf unserer Website befinden sich Links zu unseren Profilen bei:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>LinkedIn (Anbieter: LinkedIn Ireland Unlimited Company, Irland)</li>
                <li>Instagram (Anbieter: Meta Platforms Ireland Limited, Irland)</li>
                <li>YouTube</li>
                <li>GitHub (Anbieter: GitHub, Inc.)</li>
                <li>Telegram und WhatsApp</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Beim Klick auf die jeweiligen Symbole/Links verlassen Sie unsere Website und es gelten die
                Datenschutzbestimmungen der jeweiligen Anbieter.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">6. Ihre Rechte</h2>
              <p className="text-muted-foreground">Sie haben nach der DSGVO folgende Rechte:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">7. Kontakt</h2>
              <p className="text-muted-foreground">
                Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                <br />
                E-Mail:{" "}
                <a href="mailto:ewgenijbril425@gmail.com" className="text-primary hover:underline">
                    info@rebootly.de
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20"
            >
              Nach oben scrollen
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataProtection
