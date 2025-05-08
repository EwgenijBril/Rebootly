import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      title: "Innovation",
      description: "Wir streben danach, immer einen Schritt voraus zu sein und neue Wege zu finden.",
    },
    {
      title: "Qualität",
      description: "Höchste Qualitätsstandards sind die Grundlage unserer Arbeit und unseres Erfolgs.",
    },
    {
      title: "Partnerschaft",
      description: "Wir sehen uns als langfristigen Partner unserer Kunden, nicht nur als Dienstleister.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Rebootly hat unsere Erwartungen übertroffen. Die Implementierung der Cloud-Lösung hat unsere Effizienz um 40% gesteigert.",
      author: "Maria Schmidt",
      position: "CTO, TechStart GmbH",
    },
    {
      quote:
        "Die Zusammenarbeit mit dem Team von Rebootly war von Anfang an professionell und zielorientiert. Ein echter Game-Changer für unser Unternehmen.",
      author: "Thomas Weber",
      position: "Geschäftsführer, Innovate AG",
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
    <section id="ueber-uns" className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-center"
          ref={ref}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Über <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">uns</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir sind ein Team aus leidenschaftlichen Technologie-Experten, die innovative Lösungen für die digitale
            Zukunft entwickeln.
          </p>
        </motion.div>

        <div className="grid gap-16 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.2, delay: 0 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Unser Team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-2xl font-semibold">Unsere Mission</h3>
              <p className="text-muted-foreground">
                Wir bei Rebootly haben es uns zur Aufgabe gemacht, Unternehmen durch innovative IT-Lösungen zu
                transformieren und ihnen einen Wettbewerbsvorteil in der digitalen Welt zu verschaffen. Unsere Expertise
                und unser Engagement für Exzellenz treiben uns an, kontinuierlich die Grenzen des technologisch
                Möglichen zu erweitern.

                Unser Fokus liegt nicht auf der Erstellung neuer Webseiten, sondern auf der Optimierung bestehender Seiten – schnell, stabil und effizient
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-2xl font-semibold">Unsere Werte</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((value, index) => (
                  <div key={index} className="rounded-lg bg-background/50 py-4 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-primary">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <h3 className="mb-8 text-center text-2xl font-semibold">Was unsere Kunden sagen</h3>
          <div className="grid gap-8 xl:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <Quote className="absolute -top-5 -left-1 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary p-1.5 text-white" />
                <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection