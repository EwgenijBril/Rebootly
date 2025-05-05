import React from "react"
import { motion } from "framer-motion"

export function NavLinks({ activeSection, scrollToSection, isMobile = false, menuItemVariants }) {
  const links = [
    { id: "start", label: "Start" },
    { id: "loesungen", label: "Lösungen" },
    { id: "technologien", label: "Technologien" },
    { id: "ueber-uns", label: "Über uns" },
    { id: "kontakt", label: "Kontakt" },
  ]

  const LinkComponent = ({ link }) => (
    <button
      onClick={() => scrollToSection(link.id)}
      className={`relative text-base font-medium transition-colors ${isMobile ? "w-full py-2 text-left" : ""} ${
        activeSection === link.id ? "text-primary" : "text-foreground/80 hover:text-primary"
      }`}
    >
      {link.label}
      {activeSection === link.id && (
        <motion.span
          layoutId="activeSection"
          className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-secondary"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  )

  return (
    <React.Fragment>
      {links.map((link) => {
        if (isMobile && menuItemVariants) {
          return (
            <motion.div key={link.id} variants={menuItemVariants}>
              <LinkComponent link={link} />
            </motion.div>
          )
        }
        return <LinkComponent key={link.id} link={link} />
      })}
    </React.Fragment>
  )
}

export default NavLinks