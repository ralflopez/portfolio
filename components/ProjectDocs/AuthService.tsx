import React, { useEffect } from "react"
import ReactMarkdown from "react-markdown"

export const AuthService = () => {
  const [content, setContent] = React.useState("")

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ralflopez/coauth-auth-service-container/main/README.md"
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
