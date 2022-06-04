import type { NextPage } from "next"
import Head from "next/head"
import { Intro, Navbar } from "../components"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Intro />
    </div>
  )
}

export default Home
