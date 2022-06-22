import React, { useEffect } from "react"
import { gsap } from "../config"

export const useReveal = (sectionRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.set(sectionRef.current, { visibility: "visible" }).fromTo(
      sectionRef.current,
      { x: 0, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% 80%",
          end: "40% 70%",
          markers: true,
          scrub: 1,
        },
      }
    )
  }, [sectionRef])
}
