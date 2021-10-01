import React from "react"
import Button from "../_ui/Button"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import Countdown from "../../components/Countdown/Countdown"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { gradientIndex } from "../../styles/variabes"

const Ticketing = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 42vw;
    margin-bottom: 128px;
  }

  height: 275px;
  position: relative;

  a {
    text-decoration: none;
    color: ${colors.black900};
  }
`

const VirtualBlock = styled.div`
  position: relative;
  padding-top: 123px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 42vw;
    height: 275px;
    padding-right: 43px;
    float: right;
    margin-bottom: 100px;
    padding-top: 0px;
  }
`

const TicketingHeader = styled.div`
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-Regular";

  span {
    font-family: "FreightText-SemiBold";
  }
`

const TicketingDescription = styled.div`
  font-family: "Epilogue", sans-serif;
  margin-bottom: 32px;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
`

const TicketingButton = styled.div`
  span {
    font-family: "FreightText-SemiBold";
    background-color: #fff;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 9px;
    border: solid 2px #000;
    font-size: calc(22px + (22 - 16) * ((100vw - 300px) / (1600 - 300)));
  }
`

const DateBlock = styled.div`
  background-color: ${colors.grey900};
  border-radius: 12px;
  border: 2px solid ${colors.black900};
  clear: both;
  position: relative;
  width: 34vw;
  z-index: 1;

  a {
    text-decoration: none;
  }

  .date-content {
    padding-top: 66px;
    padding-left: 77px;
    padding-bottom: 51px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 236px;
    .date-content {
      padding-top: 31px;
      padding-left: 28px;
      padding-bottom: 40px;
    }
  }
`

const DateTitle = styled.div`
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-SemiBold";
  z-index: 2;
`

const DateDetails = styled.div`
  font-size: calc(18px + (35 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Epilogue", sans-serif;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    right: inherit;
  }
`

const CalenderCTA = styled(Button)`
  font-size: calc(16px + (25 - 18) * ((100vw - 300px) / (1600 - 300)));
  padding: 30px 0 0 73px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    position: inherit;
  }
`

const DateImage = styled.div`
  img {
    width: 42vw;
  }

  display: flex;
  justify-content: center;
  margin-top: -222px;
  z-index: -2;
  padding-left: 0 !important;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 99vw;
      position: absolute;
      left: -22px;
      padding-top: 114px;

      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
  }
`

const WhereContainer = styled.div`
  position: relative;
`

const WhereSection = styled.div`
  padding-top: 100px;
  position: relative;
`

const Gradient = styled.div`
  width: 100%;
  z-index: ${gradientIndex};
  position: absolute;
  bottom: -375px;
`

const WhereLink = styled.div`
  padding-top: 100px;
`

const CountdownBlock = styled.div`
  z-index: 2;
  position: relative;
`

export const Where = ({ data }) => {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gradient_4.png" }) {
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
      <WhereLink id="where"></WhereLink>
      <WhereContainer>
        <Ticketing>
          <TicketingHeader>
            Purchasing <span>tickets</span>
          </TicketingHeader>
          <TicketingDescription>
            <p>{data.ticketing_description[0].text}</p>
          </TicketingDescription>
          <a href={data.ticketing_button_url}>
            <TicketingButton>
              <span>{data.ticketing_button_text}</span>
            </TicketingButton>
          </a>
        </Ticketing>
        <VirtualBlock>
          <TicketingHeader>
            Going <span>virtual</span>
          </TicketingHeader>
          <TicketingDescription>
            <p>{data.virtual_description[0].text}</p>
          </TicketingDescription>
          {/* <TicketingButton>DOWNLOAD LINK</TicketingButton> */}
        </VirtualBlock>
        <WhereSection>
          <DateBlock>
            <div className="date-content">
              <DateTitle>{data.date_title}</DateTitle>
              <DateDetails>
                {data.date_details}
                <br />
                {data.date_time}
              </DateDetails>
              <a href={data.add_to_calender.url}>
                <CalenderCTA>ADD TO CALENDAR </CalenderCTA>
              </a>
            </div>
          </DateBlock>

          <DateImage>
            <img src={data.date_image.url} alt="" />
          </DateImage>
          <CountdownBlock>
            <Countdown data={data} />
          </CountdownBlock>
        </WhereSection>
        <Gradient>
          <Img fluid={img.file.childImageSharp.fluid} alt="" />
        </Gradient>
      </WhereContainer>
    </>
  )
}

export default Where
