import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"

const CountdownWrapper = styled.div`
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: center;
    padding-top: 440px;
  }
`

const CountdownContainer = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    text-align: center;
    background-color: ${colors.grey900};
    border-radius: 12px;
    position: absolute;
    right: 98px;
    border: 2px solid ${colors.black900};
    margin-top: -100px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 87vw;
    display: flex;
    background-color: ${colors.grey900};
    border: 2px solid ${colors.black900};
    border-radius: 12px;
    margin-top: 18px;
    justify-content: center;
    padding-bottom: 25px;
    text-align: center;
    left: 25px;
  }
`
const CountdownTimeElements = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 48px;
  width: 34vw;

  justify-content: center;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    width: 100%;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
  }
`

const CountdownTime = styled.div`
  font-size: calc(51px + (65 - 51) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-SemiBold";

  .countdown-label {
    font-size: calc(13px + (18 - 13) * ((100vw - 300px) / (1600 - 300)));
    font-family: "Epilogue", sans-serif;
  }
`

export const Countdown = ({ data }) => {
  const [countdownDate] = useState(new Date(data.date).getTime())

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime()
        const distanceToDate = countdownDate - currentTime
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
        )
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)
        const numbersToAddZeroTo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`
        }
        setState({ days: days, hours: hours, minutes, seconds: seconds })
      }
    }

    setInterval(() => updateCountdown(), 1000)
  }, [countdownDate])

  return (
    <CountdownWrapper>
      <CountdownContainer>
        <CountdownTimeElements>
          <CountdownTime>T O D A Y !</CountdownTime>
        </CountdownTimeElements>
      </CountdownContainer>
    </CountdownWrapper>
  )
}

export default Countdown
