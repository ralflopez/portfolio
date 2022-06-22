import React from "react"
import ReactMarkdown from "react-markdown"
import styles from "../styles/ProjectDocsModal.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"

interface Props {
  content: string
  url: string
}

export const ProjectDocsModal = ({ content, url }: Props) => {
  return (
    <>
      <p className={styles.link}>
        <a href={url} target='_blank' rel='noreferrer'>
          <RollingTextAnimation
            text={{ name: "Click-To-Visit-Github-Repository *" }}
          />
        </a>
      </p>
      <ReactMarkdown>{content && content}</ReactMarkdown>
    </>
  )
}
