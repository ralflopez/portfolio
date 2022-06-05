import type { NextPage } from "next"
import Head from "next/head"
import { Intro, Navbar, Projects, Skills } from "../components"
import { Cursor } from "../components/Cursor"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Cursor />
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
