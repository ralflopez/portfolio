import React from "react"
import styles from "../styles/Heading.module.scss"

interface Props {
  title: string
  caption: string
}

export const Heading = ({ caption, title }: Props) => {
  return (
    <div className={`${styles.heading} heading`}>
      <p>/ {title}</p>
      <p>{caption}</p>
    </div>
  )
}
