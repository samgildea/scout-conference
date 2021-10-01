import React from "react"
import Speaker from "../_ui/Speaker"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import Gradient from "../../images/gradient_3.png"
import { gradientIndex, layoutPaddingDesktop } from "../../styles/variabes"
import useOnScreen from "../../hooks/isVisible"

const SpeakersContainer = styled.div`
  position: relative;
  height: 100%;
  right: ${layoutPaddingDesktop};
  padding: 10vh;
  width: 100vw;
  overflow-y: scroll;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    right: 0;
  }
`

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 100%;
  }
`

const MeetTheSpeakers = styled.div`
  padding-top: 45vh;
  position: relative;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 30vh;
  }
`

const SpeakerTitle = styled.div`
  font-family: "FreightText-Regular";
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));

  .italic-speaker {
    font-family: "FreightText-SemiBold";
  }
`

const SpeakerDescription = styled.div`
  font-size: 18px;

  font-family: "Epilogue", sans-serif;
  font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));

  @media (min-width: ${dimensions.maxwidthMobile}px) {
    width: 41vw;
  }
`

const SpeakersGradient = styled.div`
  position: absolute;
  left: 0;
  margin-top: 574px;
  z-index: ${gradientIndex};
  img {
    width: 100%;
  }
`

export const Speakers = ({ data }) => {
  let speakerTitle = data.speakers_title.split(" ")
  const containerRef = React.useRef(null)
  const isWindowDefined = typeof window !== `undefined`
  const getOffset = () => {
    if (isWindowDefined) {
      return window.pageYOffset || document.documentElement.scrollTop
    }
    return 0
  }

  let [lastScrollTop, _setLast] = React.useState(getOffset())

  // Need to use a ref here in order to access the state inside of an event listener
  const scrollRef = React.useRef(lastScrollTop)
  const isVisibleOnScreen = useOnScreen(containerRef)

  const setLast = scroll => {
    scrollRef.current = scroll
    _setLast(scroll)
  }

  React.useEffect(() => {
    const scrollListener = () => {
      // Could calculate this to reference the number of speakers or scroll at the rate of the user's scroll
      let scrollSpeed = 15
      let windowScroll = getOffset()
      let speakerScroll = containerRef.current.scrollLeft

      let newSpeakerLocation =
        scrollRef.current > windowScroll
          ? speakerScroll - scrollSpeed
          : speakerScroll + scrollSpeed

      containerRef.current.scrollTo(newSpeakerLocation, 0)

      setLast(windowScroll)
    }

    if (isVisibleOnScreen && isWindowDefined) {
      // We could add CSS to style scrollbar and make it prettier
      window.addEventListener("scroll", scrollListener)
    }

    return () => {
      if (isWindowDefined) {
        window.removeEventListener("scroll", scrollListener)
      }
    }
  }, [isVisibleOnScreen])

  return (
    <>
      <SpeakersGradient>
        <img src={Gradient} alt="" />
      </SpeakersGradient>
      <MeetTheSpeakers id="speakers">
        <SpeakerTitle>
          {speakerTitle[0]}
          <span> </span>
          {speakerTitle[1]}
          <span className="italic-speaker"> {speakerTitle[2]}</span>
        </SpeakerTitle>
        <SpeakerDescription>
          {data.speakers_description[0].text}
        </SpeakerDescription>
        {/* With this method we no longer use this :( sorry */}
        {/* <HorizontalSection>
          <HorizontalScroll> */}
        <SpeakersContainer ref={containerRef}>
          {data.speakers.map((speaker, index) => (
            <Speaker key={index} id={index} speaker={speaker.speaker} />
          ))}
        </SpeakersContainer>
        {/* </HorizontalScroll>
        </HorizontalSection> */}
      </MeetTheSpeakers>
    </>
  )
}

export default Speakers
