import React from "react"
import Button from "../_ui/Button"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import WhereGradient from "../../images/gradient_2.png"
import Warp1 from "../../images/warpcutoff.png"
import { gradientIndex, grainIndex } from "../../styles/variabes"
import { RichText } from "prismic-reactjs"
import Lines1 from "../../images/lines1.png"
const AboutContainer = styled.div`
  margin-top: 256px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 190px;
  }
`
const AboutHeader = styled.div`
  position: relative;
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-Regular";

  span {
    font-family: "FreightText-SemiBold";
  }
`

const AboutDescription = styled.div`
  position: relative;
  width: 42vw;
  font-family: "Epilogue", sans-serif;

  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const ThemeImage = styled.div`
  position: absolute;
  right: 0;
  margin-top: 45px;
  overflow-x: hidden;
  display: flex;
  img {
    flex: 0 0 auto;
    margin-right: -8px;
    width: 50vw;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    position: relative;
    img {
      width: 100%;
      height: 354px;
    }
  }
`

const PastInterventions = styled.div`
  width: 40vw;
  background-color: ${colors.grey900};
  position: relative;
  border-radius: 12px;
  border: 2px solid ${colors.black900};
  margin-top: 500px;
  left: 10%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 50vw;
    left: 0;
    margin-top: -70px;
    width: 100%;
  }
`

const PastHeader = styled.div`
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-Regular";
  padding-top: 70px;
  padding-left: 75px;
  padding-right: 75px;

  span {
    font-family: "FreightText-SemiBold";
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 29px;
    padding-top: 29px;
    padding-right: 22px;
  }
`

const PastDescription = styled.div`
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Epilogue", sans-serif;
  padding-left: 75px;
  padding-right: 75px;

  a {
    color: ${colors.blue900};
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 29px;
    padding-right: 22px;
  }
`

const PastButton = styled.div`
  padding-bottom: 73px;
  padding-top: 50px;
  padding-left: 75px;

  div {
    right: 75px;
    position: absolute;
    padding-bottom: 50px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 29px;
    padding-right: 22px;
    padding-bottom: 31px;
    padding-top: 31px;
  }
`

const Gradient = styled.div`
  position: absolute;
  z-index: ${gradientIndex};
  top: 150%;
  left: -10px;
  img {
    width: 100%;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 80%;
    }
  }
`

const WarpDecoration = styled.div`
  z-index: -1;
  img {
    width: 35vw;
    position: absolute;
    right: 0;
    top: 125%;
    z-index: -1;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 262px;
      top: 100%;
    }
  }
`

const Lines = styled.div`
  position: absolute;
  left: -268px;
  z-index: ${grainIndex};

  img {
    width: 91vw;
    opacity: 0.2;
    transform: rotate(158.4deg);
    margin-top: 700px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    left: -32vw;

    img {
      width: 120vw;
      opacity: 0.2;
      transform: rotate(158.4deg);
      margin-top: 300px;
    }
  }
`

const AboutLink = styled.div`
  padding-top: 1px;
`

const LinesPositioning = styled.div`
  position: relative;
`

const LearnMoreLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const About = ({ data }) => {
  return (
    <>
      <AboutLink id="about"></AboutLink>
      <AboutContainer id="about">
        <WarpDecoration>
          <img src={Warp1} alt="" />
        </WarpDecoration>
        <Gradient>
          <img src={WhereGradient} alt="" />
        </Gradient>
        <AboutHeader>
          Inspiring <span>social change</span>
        </AboutHeader>
        <AboutDescription>{data.description[0].text}</AboutDescription>

        <ThemeImage>
          <img src={data.theme_image.url} alt="" />
        </ThemeImage>
        <LinesPositioning>
          <Lines>
            <img src={Lines1} />
          </Lines>
        </LinesPositioning>
        <PastInterventions>
          <PastHeader>
            Past <span>interventions</span>
          </PastHeader>
          <PastDescription>
            <RichText render={data.theme_description} />{" "}
          </PastDescription>
          <PastButton>
            <Button>
              <LearnMoreLink
                href="https://scout.camd.northeastern.edu/"
                target="_blank"
              >
                LEARN MORE
              </LearnMoreLink>
            </Button>
          </PastButton>
        </PastInterventions>
      </AboutContainer>
    </>
  )
}

export default About
