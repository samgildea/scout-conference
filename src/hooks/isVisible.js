import { useState, useEffect } from "react"

//src: https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer =
    typeof window !== `undefined`
      ? new IntersectionObserver(([entry]) =>
          setIntersecting(entry.isIntersecting)
        )
      : undefined

  useEffect(() => {
    if (observer) {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return isIntersecting
}
