import React, { useEffect } from "react"
import { gsap } from "../config"

export const useReveal = (sectionRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.set(sectionRef.current, { visibility: "visible" }).fromTo(
      sectionRef.current,
      { y: 100, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      }
    )
  }, [sectionRef])
}
