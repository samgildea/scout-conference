import React from "react"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import Ticker from "react-ticker"
import TickerArrow from "../../vectors/TickerArrow.svg"
import HeaderText from "../../images/headertext.png"
import HeroGradient from "../../images/gradient_1.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { gradientIndex } from "../../styles/variabes"
import colors from "../../styles/colors"

const HeroContainer = styled.div`
  position: relative;
  margin-top: 100px;
  height: calc(80vh);
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 79px;
  }

  a {
    text-decoration: none;
    color: ${colors.black900};
  }
`

const HeroDescription = styled.div`
  width: 34vw;
  font-family: "Epilogue", sans-serif;
  font-size: calc(24px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
  position: absolute;
  right: 98px;
  top: 500px;

  a {
    font-size: calc(22px + (22 - 16) * ((100vw - 300px) / (1600 - 300)));
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 80px;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;

    position: initial;
  }
`

const TickerText = styled.div`
  font-size: calc(22px + (38 - 22) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-SemiBold";
  white-space: nowrap;

  span {
    padding-left: 21px;
    padding-right: 21px;
  }
`

const HeroText = styled.div`
  margin-top: 113px;
  padding-left: 104px;

  img {
    width: 27vw;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 26px;
    margin-top: 72px;

    img {
      width: 220px;
    }
  }
`

const HeroDate = styled.div`
  padding-left: 104px;
  font-size: calc(18px + (35 - 18) * ((100vw - 300px) / (1600 - 300)));
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 26px;
  }
`

const RegisterButton = styled.a`
  font-family: "FreightText-SemiBold";
  top: 48px;
  position: relative;
  background-color: #fff;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 9px;
  border: solid 2px #000;
`

const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${gradientIndex};
  left: -5%;

  img {
    width: 105%;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      height: 1200px;
      object-fit: cover;
    }
  }
`

export const Hero = ({ data }) => {
  return (
    <>
      <Gradient id="home">
        <img src={HeroGradient} alt="" />
      </Gradient>
      <HeroContainer>
        <Ticker direction="toRight" offset="1000">
          {({ index }) => (
            <TickerText>
              <span>A VIRTUAL CONFERENCE BY SCOUT</span> <TickerArrow />
            </TickerText>
          )}
        </Ticker>

        <HeroText>
          <img src={HeaderText} alt="Image that says Interventions Disrupt" />
        </HeroText>
        <HeroDate>{data.subtext}</HeroDate>

        <HeroDescription>
          Creating a space for design-thinkers who dismantle existing structures
          within their respective fields to come together. <br />
          <RegisterButton target="_blank" href={data.header_cta_link.url}>
            {data.header_cta_text[0].text}
          </RegisterButton>
        </HeroDescription>
      </HeroContainer>
    </>
  )
}

export default Hero
