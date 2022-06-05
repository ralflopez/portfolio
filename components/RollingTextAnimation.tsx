import React from "react"
import styles from "../styles/RollingTextAnimation.module.scss"

interface Props {
  text: { name: string }
}

export const RollingTextAnimation = ({ text }: Props) => {
  return (
    <div className={styles.item}>
      {[text, text].map((text, i) => (
        <div key={i}>
          {text.name.split("").map((letter, i) => (
            <span
              key={letter + i}
              style={{ "--index": i } as React.CSSProperties}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
