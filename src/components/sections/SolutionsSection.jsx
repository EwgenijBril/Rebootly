import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cloud, Cpu, Brain, Code, Rocket, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"

export function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const solutions = [
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud-Integration",
      description:
        "Nahtlose Integration von Cloud-Diensten für maximale Skalierbarkeit und Flexibilität Ihrer IT-Infrastruktur.",
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Automatisierung",
      description:
        "Optimieren Sie Ihre Geschäftsprozesse durch intelligente Automatisierungslösungen und steigern Sie Ihre Effizienz.",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Künstliche Intelligenz",
      description:
        "Nutzen Sie das Potenzial von KI und Machine Learning für datengestützte Entscheidungen und innovative Anwendungen.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web- & App-Entwicklung",
      description:
        "Maßgeschneiderte Entwicklung von Webanwendungen und mobilen Apps mit modernsten Technologien und Frameworks.",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Digitale Transformation",
      description:
        "Umfassende Strategien zur digitalen Transformation Ihres Unternehmens für langfristigen Erfolg im digitalen Zeitalter.",
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Cybersicherheit",
      description:
        "Schützen Sie Ihre digitalen Assets mit fortschrittlichen Sicherheitslösungen und proaktiven Schutzmaßnahmen.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
          ref={ref}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unsere{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lösungen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir bieten innovative IT-Lösungen, die Ihr Unternehmen auf die nächste Stufe bringen. Entdecken Sie unsere
            Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
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