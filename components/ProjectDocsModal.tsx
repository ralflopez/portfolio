import React from "react"
import ReactMarkdown from "react-markdown"

interface Props {
  content: string
  url: string
}

export const ProjectDocsModal = ({ content, url }: Props) => {
  return (
    <>
      <p>
        <a href={url} target='_blank' rel='noreferrer'>
          Visit Github Repository *
        </a>
      </p>
      <ReactMarkdown>{content && content}</ReactMarkdown>
    </>
  )
}
