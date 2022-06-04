import React from "react"
import styles from "../styles/Navbar.module.scss"

const pages = [
  { name: "Projects", href: "#" },
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
              <div>
                {p.name.split("").map((letter, i) => (
                  <span
                    key={letter + i}
                    style={{ "--index": i } as React.CSSProperties}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div>
                {p.name.split("").map((letter, i) => (
                  <span
                    key={letter + i}
                    style={{ "--index": i } as React.CSSProperties}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
