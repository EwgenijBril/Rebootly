import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("loesungen")
    if (solutionsSection) {
      window.scrollTo({
        top: solutionsSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        const colors = ["#7878c6", "#6a46d1", "#0ea5e9"]
        const color = colors[Math.floor(Math.random() * colors.length)]

        const velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        }

        particles.push({ x, y, radius, color, velocity })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = 1 - distance / 150
            ctx.beginPath()
            ctx.strokeStyle = `rgba(120, 120, 198, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      connectParticles()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="start" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ opacity: 0.6 }} />
      <div className="container relative z-10 px-4 py-20 2xl:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                Zukunftsweisende
              </span>
              <span className="mt-2 block">IT-Lösungen für Ihr Unternehmen</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Wir verbinden innovative Technologien mit maßgeschneiderten Strategien, um Ihr Unternehmen in die digitale
              Zukunft zu führen. Entdecken Sie den Unterschied, den fortschrittliche IT-Lösungen machen können.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="relative z-10 flex items-center">
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>
            <Button
              onClick={scrollToSolutions}
              variant="outline"
              size="lg"
              className="group border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10"
            >
              Mehr erfahren
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <ChevronDown className="h-8 w-8 cursor-pointer text-primary/80" onClick={scrollToSolutions} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection