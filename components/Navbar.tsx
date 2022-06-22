import React, { useEffect, useRef, useState } from "react"
import styles from "../styles/Navbar.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import { gsap } from "../config"

const pages = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLParagraphElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const bodyRef = useRef<HTMLElement | null>(null)

  const hideBodyScrolbar = () => {
    if (!bodyRef.current) return
    bodyRef.current.style.overflow = "hidden"
  }

  const showBodyScrollbar = () => {
    if (!bodyRef.current) return
    bodyRef.current.style.overflow = "auto"
  }

  const toggleNav = () => {
    if (!showNav) {
      hideBodyScrolbar()
    } else {
      showBodyScrollbar()
    }
    setShowNav((s) => !s)
  }

  useEffect(() => {
    const body = document.querySelector("html")
    bodyRef.current = body
  }, [])

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
      {showNav && (
        <div className={styles.smallNav}>
          <nav ref={navRef}>
            {/* Links */}
            {pages.map((p) => (
              <div key={p.href}>
                <a key={p.href} href={p.href}>
                  <RollingTextAnimation text={{ name: p.name }} />
                </a>
              </div>
            ))}
          </nav>
        </div>
      )}
      <div className={styles.container}>
        {/* <p ref={brandRef} className={styles.brand}>
          Ralf Lopez{" "}
        </p> */}
        <a href='#' className={styles.brand}>
          <RollingTextAnimation text={{ name: "Ralf-Lopez" }} />
        </a>
        <nav ref={navRef}>
          {/* Menu */}
          <button className={styles.menuBtn} onClick={toggleNav}>
            MENU+
          </button>
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
