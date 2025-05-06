import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaReact, FaDocker, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs } from "react-icons/si";

export function TechnologiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // const technologies = [
  //   { name: "React", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "Next.js", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "TypeScript", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "Node.js", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "Java", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "Docker", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "PostgreSQL", icon: "/placeholder.svg?height=60&width=60" },
  //   { name: "MongoDB", icon: "/placeholder.svg?height=60&width=60" },
  // ]

  const technologies = [
    { name: "React", icon: <FaReact />  },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const benefits = [
    {
      title: "Skalierbare Architektur",
      description:
        "Unsere Technologien ermöglichen eine flexible Skalierung Ihrer Anwendungen, um mit Ihrem Unternehmen zu wachsen.",
    },
    {
      title: "Höchste Performance",
      description:
        "Durch den Einsatz moderner Frameworks und Optimierungstechniken erreichen wir maximale Geschwindigkeit und Effizienz.",
    },
    {
      title: "Zukunftssicherheit",
      description:
        "Wir setzen auf etablierte und zukunftssichere Technologien, die kontinuierlich weiterentwickelt werden.",
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
    <section id="technologien" className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-center"
          ref={ref}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unsere{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologien
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir setzen auf modernste Technologien und Frameworks, um innovative und zukunftssichere Lösungen zu
            entwickeln.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8"
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center justify-center">
              <div className="group mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
              </div>
              <span className="text-center text-sm font-medium">{tech.name}</span>
          </motion.div>
          ))}
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 lg:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection