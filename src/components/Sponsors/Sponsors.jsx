import React from "react"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import { Flex, Box } from "reflexbox"
import { useStaticQuery, graphql } from "gatsby"
import Gradient from "../../images/gradient_6.png"
import { gradientIndex } from "../../styles/variabes"
import Lines2 from "../../images/lines2.png"

const SponsorsContainer = styled.div`
  position: relative;

  margin-top: 215px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 96px;
  }
`

const SponsorsCenter = styled.div`
  display: flex;
  justify-content: center;
`

const SponsorsHeader = styled.div`
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-Regular";
  text-align: center;

  span {
    font-family: "FreightText-SemiBold";
  }
`

const SponsorsIntro = styled.div`
  width: 30vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const SponsorsDescription = styled.div`
  font-family: "Epilogue", sans-serif;
  font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
`

const SponsorsImages = styled.div`
  margin-top: 71px;
  justify-content: center;
  margin-bottom: 220px;

  img {
    padding-right: 78px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      padding-right: 0px;
    }
  }
`

const FooterGradient = styled.div`
  position: absolute;
  left: -2%;
  z-index: ${gradientIndex};
  // width: 104%;
  overflow: hidden;

  img {
    width: 104%;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 0px;
    img {
      height: 513px;
      object-fit: cover;
    }
  }
`

const Lines2Container = styled.div`
  img {
    position: absolute;
    right: 0;
    padding-top: 384px;
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      position: absolute;
      right: 0;
      padding-top: 384px;
      width: 400px;
    }
  }
`

export const Sponsors = ({ data }) => {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gradient_6.png" }) {
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
      <FooterGradient>
        <img src={Gradient} alt="" />
      </FooterGradient>
      <Lines2Container>
        <img src={Lines2} />
      </Lines2Container>

      <SponsorsContainer>
        <SponsorsCenter>
          <SponsorsIntro>
            <div>
              <SponsorsHeader>
                {data.sponsors_header.split(" ")[0]}
                <span> {data.sponsors_header.split(" ")[1]}</span>
              </SponsorsHeader>
              <SponsorsDescription>
                {data.sponsors_description}
              </SponsorsDescription>
            </div>
          </SponsorsIntro>
        </SponsorsCenter>

        <SponsorsImages>
          <Flex
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
          >
            {data.sponsor_images.map((image, i) => (
              <Box key={i} width={[1, 1 / 3, 1 / 3, 1 / 6]}>
                <img src={image.image.url} alt={image.image.alt} />
              </Box>
            ))}
          </Flex>
        </SponsorsImages>
      </SponsorsContainer>
    </>
  )
}

export default Sponsors
