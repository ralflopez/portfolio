import React, { ReactNode, useContext, useState } from "react"
import { Heading } from "./Heading"
import styles from "../styles/Projects.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import Image from "next/image"
import { ModalContext } from "../contexts"
import {
  CryptoTrading,
  EWallet,
  PasswordManager,
  AuthService,
} from "./ProjectDocs"

const projects = [
  {
    name: "Password-Manager",
    stack:
      "Typescript, Nest.js, Next.js, Chakra UI, REST, PostgreSQL, Session, Prisma, Docker, Jest",
    img: "/images/vault-pass.gif",
    component: PasswordManager,
  },
  {
    name: "E - Wallet",
    stack:
      "Typescript, Nest.js, Next.js, Chakra UI, GraphQL, PostgreSQL, TypeORM, Session, Docker, Paymongo API",
    img: "/images/e-wallet.gif",
    component: EWallet,
  },
  {
    name: "Crypto-Trading",
    stack:
      "Typescript, Nest.js, Next.js, Tailwind CSS, GraphQL, PostgreSQL, Prisma, JWT, Docker, CoinCap API, Jest",
    img: "/images/paper-trade.gif",
    component: CryptoTrading,
  },
  {
    name: "Auth-Service",
    stack: "Go, PostgreSQL, JWT, Session, Docker",
    component: AuthService,
  },
]

export const Projects = () => {
  const modal = useContext(ModalContext)

  return (
    <section id='projects' className={styles.projects}>
      <Heading title='Projects' caption='Here are some of my works.' />
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            className={styles.gridElement}
            key={project.name}
            onClick={() => {
              modal.open(project.component)
            }}
          >
            <RollingTextAnimation text={{ name: project.name }} />
            <span className={styles.nameAccent}> *</span>
            <p>{project.stack}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
