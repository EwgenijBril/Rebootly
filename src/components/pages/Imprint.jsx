"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/Button"

export function Imprint() {
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
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">Impressum</h1>

          <div className="space-y-8 rounded-lg border border-border/40 bg-background/50 p-8 backdrop-blur-sm">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
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
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Kontakt</h2>
              <p className="text-muted-foreground">
                E-Mail:{" "}
                <a href="mailto:ewgenijbril425@gmail.com" className="text-primary hover:underline">
                    info@rebootly.de
                </a>
                <br />
                +49 176 64084993
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-muted-foreground">
                Ewgenij Bril
                <br />
                Marktplatz 32
                <br />
                72250 Freudenstadt
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Haftung für Inhalte</h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Haftung für Links</h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              </p>
              <p className="mt-4 text-muted-foreground">
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-4 text-muted-foreground">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Plattform der EU-Kommission zur Online-Streitbeilegung</h2>
              <p className="text-muted-foreground">
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
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

export default Imprint
