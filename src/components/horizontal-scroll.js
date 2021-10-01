import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import useOnScreen from "../hooks/isVisible"
import dimensions from "../styles/dimensions"

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 100vh;
  }
`

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 100%;
  }
`

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth
  const dynamicHeight = calcDynamicHeight(objectWidth)
  setDynamicHeight(dynamicHeight)
}

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop
    console.log(offsetTop)
    setTranslateX(offsetTop)
  })
}

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const containerRef = useRef(null)
  const objectRef = useRef(null)

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  const observer = React.useRef(
    new ResizeObserver(entries => {
      for (let entry of entries) {
        const cr = entry.contentRect
        // console.log(cr)

        const offsetTop = -containerRef.current.offsetTop
        setTranslateX(offsetTop)
      }
    })
  )

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener("resize", resizeHandler)
    applyScrollListener(containerRef, setTranslateX)
    observer.current.observe(containerRef.current)
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX } ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}
