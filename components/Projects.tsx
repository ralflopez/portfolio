import React from "react"
import { Heading } from "./Heading"
import styles from "../styles/Projects.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import Image from "next/image"

const projects = [
  {
    name: "Password-Manager",
    stack: "Nest.js, Next.js, REST, PostgreSQL, Prisma",
    img: "/images/vault-pass.gif",
  },
  {
    name: "E - Wallet",
    stack: "Nest.js, Next.js, GraphQL, PostgreSQL, TypeORM, Paymongo API",
    img: "/images/e-wallet.gif",
  },
  {
    name: "Crypto-Trading",
    stack: "Nest.js, Next.js, GraphQL, PostgreSQL, Prisma, CoinCap API",
    img: "/images/paper-trade.gif",
  },
]

export const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
      <Heading title='Projects' caption='Here are some of my works.' />
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name}>
            <RollingTextAnimation text={{ name: project.name }} />
            <span className={styles.nameAccent}> *</span>
            <p>{project.stack}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
