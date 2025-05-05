import { useState, useEffect } from "react"
import Header from "./layout/Header"
import ScrollProgress from "./layout/ScrollProgress"
import Footer from "./layout/Footer"
import HeroSection from "./sections/HeroSection"
import SolutionsSection from "./sections/SolutionsSection"
import TechnologiesSection from "./sections/TechnologiesSection"
import AboutSection from "./sections/AboutSection"
import ContactSection from "./sections/ContactSection"

export function LandingPage() {
  const [activeSection, setActiveSection] = useState("start")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <ScrollProgress />
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <SolutionsSection />
        <TechnologiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage