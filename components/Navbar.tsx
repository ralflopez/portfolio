import React from "react"
import styles from "../styles/Navbar.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"

const pages = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <p className={styles.brand}>Ralf Lopez </p>
        <nav>
          {/* Menu */}
          <button className={styles.menuBtn}>MENU+</button>
          {/* Links */}
          {pages.map((p) => (
            <a key={p.href} href={p.href} className={styles.menuItem}>
              <RollingTextAnimation text={{ name: p.name }} />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
