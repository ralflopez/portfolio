import React, { useContext, useRef } from "react"
import { Heading } from "./Heading"
import styles from "../styles/Projects.module.scss"
import { RollingTextAnimation } from "./RollingTextAnimation"
import { ModalContext } from "../contexts"
import { useReveal } from "../hooks"
import { IProjects } from "../pages"
import { ProjectDocsModal } from "./ProjectDocsModal"

interface Props {
  projects: IProjects[]
}

export const Projects = ({ projects }: Props) => {
  const modal = useContext(ModalContext)

  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section ref={sectionRef} id='projects' className={styles.projects}>
      <Heading title='Projects' caption='Here are some of my works.' />
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            className={styles.gridElement}
            key={project.name}
            onClick={() => {
              modal.open(() => (
                <ProjectDocsModal content={project.content} url={project.url} />
              ))
            }}
          >
            <RollingTextAnimation text={{ name: project.name }} />
            <span className={styles.nameAccent}> *</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
