import React from "react"
import { Heading } from "./Heading"
import styles from "../styles/Skills.module.scss"
import {
  html,
  css,
  js,
  ts,
  go,
  java,
  react,
  nextjs,
  node,
  nestjs,
  express,
  graphql,
  git,
  postgres,
  docker,
} from "../icons"

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  { name: "CSS", icon: css },
  { name: "JAVASCRIPT", icon: js },
  { name: "TYPESCRIPT", icon: ts },
  { name: "GO", icon: go },
  { name: "JAVA", icon: java },
  { name: "REACT", icon: react },
  { name: "NEXT.JS", icon: nextjs },
  { name: "NODE", icon: node },
  { name: "NEST.JS", icon: nestjs },
  { name: "EXPRESS", icon: express },
  { name: "GRAPHQL", icon: graphql },
  { name: "GIT", icon: git },
  { name: "POSTGRES", icon: postgres },
  { name: "DOCKER", icon: docker },
]

export const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
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
