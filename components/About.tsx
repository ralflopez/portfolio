import React, { useEffect, useRef } from "react"
import { Heading } from "./Heading"
import styles from "../styles/About.module.scss"
import { gsap } from "../config"
import { useReveal } from "../hooks"

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section className={styles.about} ref={sectionRef} id='about'>
      <Heading title='About Me' caption='Nice to meet you.' />
      <div>
        <div className={styles.grid}>
          <div className={styles.name}>
            <h4>Hi Im Ralf</h4>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.caption}>
            <p>
              A software engineer based in the Philippines. {"I'm"} here to
              provide my service to fill your {"company's"} needs.{" "}
              <button>
                View more <span>*</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
