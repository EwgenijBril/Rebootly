import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-primary to-secondary before:absolute before:inset-0 before:animate-pulse before:bg-gradient-to-br before:from-primary/50 before:to-secondary/50 before:blur-xl">
                <span className="relative z-10 text-white font-gagalin">R</span>
              </span>
              <span className="font-gagalin bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
               Rebootly
              </span>
            </div>
            <p className="max-w-xs text-muted-foreground">
              Innovative IT-Lösungen für die digitale Transformation Ihres Unternehmens. Wir verbinden Technologie mit
              Strategie.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary transition-colors hover:text-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary transition-colors hover:text-secondary"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary transition-colors hover:text-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary transition-colors hover:text-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary transition-colors hover:text-secondary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Lösungen</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Website-Reparatur
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  System-Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Responsive Design
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Performance-Optimierung
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Technologie-Migration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Website-Erweiterungen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Cookie-Richtlinie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {currentYear} Rebootly. Alle Rechte vorbehalten.</p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary transition-colors hover:text-secondary md:mt-0"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer