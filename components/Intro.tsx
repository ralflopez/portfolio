import React, { useEffect } from "react"
import styles from "../styles/Intro.module.scss"
import { gsap } from "../config"
import SplitType from "split-type"

export const Intro = () => {
  useEffect(() => {
    const text = new SplitType("#hero-text span", { types: "lines, chars" })

    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.out",
      },
    })

    tl.set("#intro", { visibility: "visible" })
      .delay(0.5)
      .fromTo(
        "#hero-text .char",
        { y: 100, skewY: 10 },
        { y: 0, skewY: 0, stagger: 0.03, ease: "power2.out" }
      )
      .delay(1)
      .fromTo(
        "#intro > div",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.03, ease: "power2.out" }
      )
  }, [])

  return (
    <section id='intro' className={styles.intro}>
      <h1 id='hero-text'>
        <span>A software engineer </span>
        <span>driven by quality & impact!</span>
        {/* <div className={styles.ball}></div> */}
      </h1>
      <div>
        <p>Lets work</p>
        <p>Together</p>
      </div>
    </section>
  )
}
