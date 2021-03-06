import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { About, Intro, Navbar, Projects, Skills } from "../components"
import { Contact } from "../components/Contact"
import { Cursor } from "../components/Cursor"
import { ModalContextProvider } from "../contexts"
import styles from "../styles/Home.module.scss"
import fetch from "node-fetch"

export interface IProjects {
  name: string
  description: string
  content: string
  url: string
}

export interface IndexPageProps {
  projects: IProjects[]
}

const Home: NextPage<IndexPageProps> = ({ projects }: IndexPageProps) => {
  return (
    <ModalContextProvider>
      <div className={styles.container}>
        <Head>
          <title>Ralf Lopez</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Cursor />
        <Navbar />
        <Intro />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </div>
    </ModalContextProvider>
  )
}

export default Home

export const getStaticProps = async () => {
  const projects: IProjects[] = [
    {
      name: "E-Wallet",
      description:
        "Typescript, Nest.js, Next.js, Chakra UI, GraphQL, PostgreSQL, TypeORM, Session, Docker, Paymongo API",
      content:
        "https://raw.githubusercontent.com/ralflopez/bahagi-digital-wallet/main/README.md",
      url: "https://github.com/ralflopez/bahagi-digital-wallet",
    },
    {
      name: "Crypto-Trading",
      description:
        "Typescript, Nest.js, Express, Tailwind CSS, GraphQL, PostgreSQL, Prisma, JWT, Docker, CoinCap API, Jest",
      content:
        "https://raw.githubusercontent.com/ralflopez/paper-trade/main/README.md",
      url: "https://github.com/ralflopez/paper-trade",
    },
    {
      name: "Password-Manager",
      description:
        "Typescript, Nest.js, Next.js, Chakra UI, REST, PostgreSQL, Session, Prisma, Docker, Jest",
      content:
        "https://raw.githubusercontent.com/ralflopez/vault-pass/main/README.md",
      url: "https://github.com/ralflopez/vault-pass",
    },
    {
      name: "Auth-Service",
      description: "Go, PostgreSQL, JWT, Session, Docker",
      content:
        "https://raw.githubusercontent.com/ralflopez/coauth-auth-service-container/main/README.md",
      url: "https://github.com/ralflopez/coauth-auth-service-container",
    },
  ]

  // extract readme content from link
  const projectProps = await Promise.all(
    projects.map(async (project) => {
      const result = await fetch(project.content).then((res) => res.text())
      return {
        ...project,
        content: result,
      }
    })
  )

  return {
    props: {
      projects: projectProps,
    },
  }
}
