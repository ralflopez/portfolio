import React, { useEffect, useRef, useState } from "react"
import styles from "../styles/Cursor.module.scss"
import Image from "next/image"

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  const changeCursorPos = (e: MouseEvent) => {
    if (!cursorRef.current) return
    const { clientX, clientY } = e
    cursorRef.current.style.transform = `translate(-50%, -50%) translate3d(${clientX}px, ${clientY}px, 0)`
  }

  useEffect(() => {
    window.addEventListener("mousemove", changeCursorPos)
    return () => window.removeEventListener("mousemove", changeCursorPos)
  }, [])

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <div>
        <Image src='/cursor.svg' alt='' layout='fill' />
      </div>
    </div>
  )
}
