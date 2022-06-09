import React, { useRef } from "react"
import { Heading } from "./Heading"
import styles from "../styles/Skills.module.scss"
import {
  js,
  ts,
  react,
  nextjs,
  node,
  nestjs,
  graphql,
  postgres,
  docker,
} from "../icons"
import { useReveal } from "../hooks"

const skills = [
  { name: "JAVASCRIPT", icon: js },
  { name: "TYPESCRIPT", icon: ts },
  { name: "REACT", icon: react },
  { name: "NEXT.JS", icon: nextjs },
  { name: "NODE", icon: node },
  { name: "NEST.JS", icon: nestjs },
  { name: "GRAPHQL", icon: graphql },
  { name: "POSTGRES", icon: postgres },
  { name: "DOCKER", icon: docker },
]

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section ref={sectionRef} id='skills' className={styles.skills}>
      <Heading title='Skills' caption='Whats in my toolbelt.' />
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className={styles.icon}>
              <skill.icon style={{ width: "20px" }} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
