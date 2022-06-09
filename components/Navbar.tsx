import React, { useEffect, useRef } from "react"
import styles from "../styles/Navbar.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import { gsap } from "../config"

const pages = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLParagraphElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
      },
    })
    tl.set(navbarRef.current, { visibility: "visible" })
      .delay(1.2)
      .fromTo(navbarRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(
        brandRef.current,
        {
          y: -100,
        },
        {
          y: 0,
        }
      )
      .fromTo(
        navRef.current,
        {
          y: -100,
        },
        { y: 0 }
      )
  }, [])

  return (
    <div ref={navbarRef} className={styles.navbar}>
      <div className={styles.container}>
        <p ref={brandRef} className={styles.brand}>
          Ralf Lopez{" "}
        </p>
        <nav ref={navRef}>
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
