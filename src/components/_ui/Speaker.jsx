import React, { useState } from "react"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import Expand from "../../vectors/expand.svg"
import Minimize from "../../vectors/minimize.svg"

const SpeakerCard = styled.div`
  position: relative;
  height: 459px;
  width: 27vw;
  background-color: ${colors.grey900};
  flex-shrink: 0;
  border-radius: 12px;
  margin-left: 31px;
  border: 2px solid ${colors.black900};

  &.expand {
    height: 739px;
    width: 42vw;
  }

  &.expand img {
    object-fit: cover;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    &.expand {
      width: 71vw;
      height: 522px;
    }

    &.expand img {
      width: 71vw !important;
    }
  }

  &.expand img {
    width: 42vw;
  }

  &.even-card {
    top: 80px;
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 57vw;
    height: 262px;
  }
`
const SpeakerImage = styled.div`
  img {
    margin-left: -1px;

    margin-top: 30px;
    width: 56.9vw;
    height: 167px;
    object-fit: cover;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      margin-top: 51px;
      width: 26.9vw;
      height: 276px;
      object-fit: cover;
    }
  }
`
const SpeakerName = styled.div`
  font-size: calc(20px + (32 - 20) * ((100vw - 300px) / (1600 - 300)));
  padding-left: 17px;
  font-family: "FreightText-Medium-Italic";
  color: ${colors.blue900};
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 30px;
  }
`

const SpeakerTitle = styled.div`
  font-family: "Epilogue", sans-serif;
  padding-left: 17px;
  font-size: calc(13px + (20 - 13) * ((100vw - 300px) / (1600 - 300)));
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 30px;
  }
`

const ExpandIcon = styled.div`
  position: absolute;
  right: 9px;
  top: 6px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    right: 15px;
    top: 11px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    svg {
      width: 18px;
      height: 19px;
    }
  }
`

const SpeakerBio = styled.div`
  display: none;
  font-size: calc(13px + (18 - 13) * ((100vw - 300px) / (1600 - 300)));
  padding-left: 17px;
  padding-right: 22px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 30px;
    padding-right: 41px;
  }

  &.expand {
    display: inherit;
  }
`

export const Speaker = ({ speaker, id }) => {
  const [expand, setExpand] = useState(false)

  return (
    <SpeakerCard
      className={`${id % 2 === 0 ? "even-card" : ""}  ${
        expand ? "expand" : ""
      }`}
    >
      <ExpandIcon onClick={() => setExpand(!expand)}>
        {!expand ? <Expand /> : <Minimize />}
      </ExpandIcon>

      <SpeakerImage>
        <img src={speaker.speaker_image.url} alt="" />
      </SpeakerImage>
      <SpeakerName>{speaker.speaker_name}</SpeakerName>
      <SpeakerTitle>{speaker.speaker_title}</SpeakerTitle>

      <SpeakerBio className={expand ? "expand" : ""}>
        {speaker.speaker_bio}
      </SpeakerBio>
    </SpeakerCard>
  )
}

export default Speaker
