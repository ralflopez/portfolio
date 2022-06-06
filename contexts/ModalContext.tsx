import React, { createContext, useEffect, useRef, useState } from "react"
import { Modal } from "../components/Modal"

type Component = () => JSX.Element

const initState: { show: boolean; component: Component | null } = {
  show: false,
  component: null,
}

export const ModalContext = createContext({
  close: () => {},
  open: (_: Component | null) => {},
  modal: initState,
})

export const ModalContextProvider = ({ children }: any) => {
  const bodyRef = useRef<HTMLBodyElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [modal, setModal] = useState(initState)

  useEffect(() => {
    const body = document.querySelector("body")
    bodyRef.current = body
    console.log(body)
  }, [])

  const hideBodyScrolbar = () => {
    if (!bodyRef.current || !modalRef.current) return
    bodyRef.current.style.overflow = "hidden"
  }

  const showBodyScrollbar = () => {
    if (!bodyRef.current || !modalRef.current) return
    bodyRef.current.style.overflow = "auto"
  }

  const showModal = () => {
    if (!modalRef.current) return
    modalRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.774);"
    modalRef.current.style.transform = "translate3d(0, 0, 0)"
  }

  const hideModal = () => {
    if (!modalRef.current) return
    modalRef.current.style.backgroundColor = "rgba(0, 0, 0, 0);"
    modalRef.current.style.transform = "translate3d(0, 100vh, 0)"
  }

  const close = () => {
    showBodyScrollbar()
    hideModal()
    setModal((s) => ({ ...s, show: false }))
  }

  const open = (component: Component | null) => {
    hideBodyScrolbar()
    showModal()
    setModal({ show: true, component })
  }

  return (
    <ModalContext.Provider
      value={{
        close,
        open,
        modal,
      }}
    >
      <Modal ref={modalRef} />
      {children}
    </ModalContext.Provider>
  )
}
