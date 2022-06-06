import React, { forwardRef, useContext } from "react"
import { ModalContext } from "../contexts"
import styles from "../styles/Modal.module.scss"
import ReactMarkdown from "react-markdown"
import { RollingTextAnimation } from "./RollingTextAnimation"

export const Modal = forwardRef((_, ref: any) => {
  const modal = useContext(ModalContext)

  return (
    <div
      className={styles.modalBg}
      onClick={(e) => {
        if (e.currentTarget == e.target) modal.close()
      }}
      ref={ref}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button onClick={modal.close}>
            <RollingTextAnimation text={{ name: "Close" }} />
            <span className={styles.accent}> *</span>
          </button>
        </div>
        <div className={styles.body}>
          {modal.modal.component && <modal.modal.component />}
        </div>
      </div>
    </div>
  )
})

Modal.displayName = "Modal"
