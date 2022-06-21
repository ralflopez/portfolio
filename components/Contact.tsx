import React, { useRef, useState } from "react"
import { Heading } from "./Heading"
import styles from "../styles/Contact.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import Link from "next/link"
import { useReveal } from "../hooks"

const socialMedia = [
  {
    name: "Email",
    username: "ralflopez3@gmail.com",
    link: "http://www.gmail.com",
  },
  {
    name: "Github",
    username: "ralflopez",
    link: "https://github.com/ralflopez",
  },
  {
    name: "LinkedIn",
    username: "Ralf Alexander Lopez",
    link: "https://www.linkedin.com/in/ralf-alexander-lopez/",
  },
]

export const Contact = () => {
  const [message, setMessage] = useState("")
  const [from, setFrom] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section ref={sectionRef} id='contact' className={styles.contact}>
      <Heading title='Contact' caption='Lets connect' />
      <div className={styles.grid}>
        <div>
          <form onSubmit={submit}>
            <h2>Send me an email</h2>
            <div>
              <div>Your email</div>
              <input
                name='email'
                value={from}
                type='email'
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div>
              <div>Message</div>
              <textarea
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div>
          {socialMedia.map((s) => (
            <div key={s.name} className={styles.socialBtn}>
              <a href={s.link} target='_blank' rel='noreferrer'>
                <RollingTextAnimation text={{ name: s.name }} />
                <span className={styles.nameAccent}> *</span>
              </a>
              <p>{s.username}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
