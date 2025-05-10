import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { useForm, ValidationError } from '@formspree/react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [state, handleSubmit] = useForm("xzzrvorn")

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
    <section id="kontakt" className="relative py-20 md:py-32">
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
            Kontaktieren Sie{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">uns</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bereit, Ihr nächstes Projekt zu starten? Kontaktieren Sie uns noch heute für eine kostenlose Beratung.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Kontaktinformationen - bleibt unverändert */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className=" space-y-14"
          >
            {/* Adresse, Telefon, E-Mail */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-semibold">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      Marktplatz 32<br />
                      72250 Freudenstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+49 176 64084993</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a  href="mailto:inforebootly@gmail.com" className="text-muted-foreground hover:underline">inforebootly@gmail.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Schnellkontakt */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Schnelle Kontaktaufnahme</h3>
                  <p className="text-sm text-muted-foreground">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="https://wa.me/4917664084993" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90">WhatsApp</Button>
                </a>
                <a href="https://t.me/@Ewgen425" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-[#0088cc] text-white hover:bg-[#0088cc]/90">Telegram</Button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Formular */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-semibold">Schreiben Sie uns</h3>
              {state.succeeded ? (
                <div className="rounded-lg bg-green-500/10 p-4 text-green-500">
                  <p className="font-medium">Vielen Dank für Ihre Nachricht!</p>
                  <p className="text-sm">Wir melden uns in Kürze bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Ihr Name"
                      className="border-border/40 bg-background/50 backdrop-blur-sm focus:border-primary"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="ihre-email@beispiel.de"
                      className="border-border/40 bg-background/50 backdrop-blur-sm focus:border-primary"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">Nachricht</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Wie können wir Ihnen helfen?"
                      rows={5}
                      className="border-border/40 bg-background/50 backdrop-blur-sm focus:border-primary"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    disabled={state.submitting}
                  >
                    <span className="flex items-center">
                      {state.submitting ? "Wird gesendet..." : "Nachricht senden"}
                      <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
