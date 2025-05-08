import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wrench, RefreshCw, Smartphone, Zap, ArrowRightLeft, PuzzleIcon as PuzzlePiece } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"

export function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const solutions = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Reparatur defekter Websites",
      description:
        "Behebung von 404-Fehlern, Ladeproblemen und technischen Störungen, um Ihre Website wieder voll funktionsfähig zu machen.",
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Aktualisierung von Abhängigkeiten",
      description:
        "Aktualisierung von Bibliotheken, Frameworks und CMS-Systemen, um Sicherheit und Kompatibilität zu gewährleisten.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive Design",
      description:
        "Optimierung Ihrer Website für mobile Endgeräte, damit Ihre Inhalte auf allen Bildschirmgrößen perfekt dargestellt werden.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance-Optimierung",
      description:
        "Steigerung der Ladegeschwindigkeit und Verbesserung der allgemeinen Performance Ihrer Website für ein besseres Nutzererlebnis.",
    },
    {
      icon: <ArrowRightLeft className="h-10 w-10" />,
      title: "Migrationen",
      description:
        "Umstellung von veralteten Technologien wie jQuery auf moderne Frameworks wie React oder Migration von Legacy-CMS auf aktuelle Plattformen.",
    },
    {
      icon: <PuzzlePiece className="h-10 w-10" />,
      title: "Kleine Erweiterungen",
      description:
        "Implementierung neuer Blöcke, Formulare, SEO-Verbesserungen und Design-Anpassungen, um Ihre Website kontinuierlich zu verbessern.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section id="loesungen" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-center"
          ref={ref}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Unsere{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lösungen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir bieten spezialisierte Dienstleistungen zur Wartung, Optimierung und Erweiterung Ihrer Website. Entdecken
            Sie unsere maßgeschneiderten Lösungen für Ihre individuellen Anforderungen.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-300 group-hover:text-secondary">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection
