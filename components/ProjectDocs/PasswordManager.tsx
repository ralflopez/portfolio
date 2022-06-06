import React, { useEffect } from "react"
import ReactMarkdown from "react-markdown"

export const PasswordManager = () => {
  const [content, setContent] = React.useState("")

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ralflopez/vault-pass/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
      })
  }, [])

  return (
    <>
      <p>
        Code blocks are hidden in this readme. Visit the repository instead.
      </p>
      <ReactMarkdown>{content && content}</ReactMarkdown>
    </>
  )
}