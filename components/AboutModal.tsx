import React from "react"
import styles from "../styles/AboutModal.module.scss"

export const AboutModal = () => {
  return (
    <div className={styles.aboutModal}>
      <div>
        <h3>
          {`Hi, I'm Ralf, a software engineer based in the Philippines. I'm 
        here to provide my service to fill your company's needs.`}
        </h3>
        <p>
          {`My interest in software started in high school, the time when Google
        released Material UI. At that moment, I knew I always wanted to be part
        of building both beautiful and functional applications. The problem was
        that I didn't have the resources, so my "lack of initiative self"
        decided to wait for college (not recommended btw).`}
        </p>
        <p>
          {`During college, programming wasn't the best journey. There were a lot of topics that I couldn't wrap my head around. In short, I sucked. But I still wanted to build applications.`}
        </p>
        <p>
          {`Suddenly the world was locked down because of the pandemic. I knew I should use that time to improve myself. So I took the initiative to learn how to build things for the web. I started with frontend development, but it was an easy slippery slope to learn everything across the stack, and I'm glad it was.`}
        </p>
        <p>{`I got interested in working on the backend. I love the engineering decisions behind complex systems and codebases. From my first line of code to the last line I added today, I never stopped learning and never will.`}</p>
        <p>{`Hundreds of git commit later, I saw myself helping students in their programming and web development subjects, something I never thought I would be qualified for. I built a lot of personal projects and relationships along the way. But the best thing I made was the confidence to learn whatever I wanted to develop.`}</p>
      </div>
    </div>
  )
}
