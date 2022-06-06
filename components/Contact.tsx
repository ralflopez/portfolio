import React, { useState } from "react"
import { Heading } from "./Heading"
import styles from "../styles/Contact.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import Link from "next/link"

const socialMedia = [
  {
    name: "Email",
    username: "ralflopez3@gmail.com",
    link: "http://www.gmail.com",
  },
  { name: "Github", username: "ralflopez", link: "http://www.github.com" },
  { name: "LinkedIn", username: "Ralf Lopez", link: "http://www.linkedin.com" },
]

export const Contact = () => {
  const [message, setMessage] = useState("")
  const [from, setFrom] = useState("")

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section id='contact' className={styles.contact}>
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
                <p>{s.username}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
