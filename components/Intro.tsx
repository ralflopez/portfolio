import React from "react"
import styles from "../styles/Intro.module.scss"

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <h1>
        <span>A software engineer</span>
        <span className={styles.ball}>
          <div></div>
        </span>
        <span>driven by design & quality</span>
      </h1>
      <div>
        <p>Lets work</p>
        <p>Together</p>
      </div>
    </section>
  )
}
