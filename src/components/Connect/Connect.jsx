import React from "react"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import { RichText } from "prismic-reactjs"
import Gradient from "../../images/gradient_5.png"
import Warp2 from "../../images/warp2.png"
import Instagram from "../../vectors/instagramsquare.svg"
import Facebook from "../../vectors/facebooksquare.svg"
import { useStaticQuery, graphql } from "gatsby"
import {
  gradientIndex,
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../styles/variabes"

const ConnectSection = styled.div`
  padding-top: 241px;
  position: relative;
  clear: both;
`

const ContactBlock = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 42vw;
  }
`

const ContactHeader = styled.div`
  font-family: "FreightText-Regular";
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));

  span {
    font-family: "FreightText-SemiBold";
  }
`

const ContactDescription = styled.div`
  font-family: "Epilogue", sans-serif;
  margin-bottom: 32px;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));

  a {
    color: ${colors.blue900};
  }
`

const ConnectImage = styled.div`
  display: flex;
  position: absolute;
  right: -${layoutPaddingDesktop};
  margin-top: 83px;
  img {
    width: 42vw;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 325px;
      height: 457px;
    }
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    right: -${layoutPaddingMobile};
  }
`

const FollowBlock = styled.div`
  // width: 36vw;
  position: absolute;
  background-color: ${colors.grey900};
  padding-left: 74px;
  padding-top: 110px;
  padding-right: 42px;
  margin-top: 513px;
  padding-bottom: 136px;
  border-radius: 12px;
  border: 2px solid ${colors.black900};
  font-size: calc(18px + (35 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Epilogue", sans-serif;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 300px;
    padding-top: 35px;
    padding-left: 29px;
    padding-bottom: 74px;
    margin-top: 300px;
  }
`

const FollowText = styled.div`
font-family: "Epilogue";
font-weight: 300;
`

const Follow = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: center;
  }
`

const ConnectGradient = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  z-index: ${gradientIndex};
  img {
    width: 100%;

    position: absolute;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`

const ConnectWarp = styled.div`
  overflow: hidden;

  img {
    width: 700px;
    position: absolute;
    left: -154px;
    top: 792px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      position: absolute;
      width: 247px;
      top: 380px;
      left: -43px;
    }
  }
`

const SocialSvgIcons = styled.div`
  position: absolute;
  right: 42px;
  padding-top: 40px;


  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 0;
  }

  svg {
    margin-left: 20px;
  }
`

export const Connect = ({ data }) => {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gradient_5.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return (
    <>
      <ConnectSection id="connect">
        <ConnectWarp>
          <img src={Warp2} />
        </ConnectWarp>
        <ContactBlock>
          <ContactHeader>
            Get in <span>contact</span>
          </ContactHeader>
          <ContactDescription>
            <RichText render={data.connect_description} />
          </ContactDescription>
        </ContactBlock>
        <ConnectImage>
          <img src={data.connect_image.url} alt="" />
        </ConnectImage>
        <Follow>
          <FollowBlock>
            <FollowText>
              Follow the event <br />
              #interventionsbyscout
            </FollowText>
            <SocialSvgIcons>
              <a href={data.facebook_url}>
                <Facebook />
              </a>
              <a href={data.instagram_url}>
                <Instagram />
              </a>
            </SocialSvgIcons>
          </FollowBlock>
        </Follow>
      </ConnectSection>
      <ConnectGradient>
        <img src={Gradient} alt="" />
      </ConnectGradient>
    </>
  )
}

export default Connect
