import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Connect from "../components/Connect/Connect"
import Speakers from "../components/Speakers/Speakers"
import Where from "../components/Where/Where"
import Layout from "../components/Layout"
import FAQ from "../components/FAQ/FAQ"
import Sponsors from "../components/Sponsors/Sponsors"
import Footer from "../components/Footer/Footer"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import background from "../images/grain.png"
import { grainIndex } from "../styles/variabes"
import { Helmet } from "react-helmet"

const Texture = css`
  background-image: url(${background});
`

const Grain = styled.div`
  position: fixed;
  top: 0;
  z-index: ${grainIndex};
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  mix-blend-mode: multiply;
`

const RenderBody = ({
  hero,
  countdown,
  about,
  connect,
  speakers,
  where,
  faq,
  sponsors,
}) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Interventions: Disrupt Conference 2021</title>
      <link rel="canonical" href="https://interventions.design/" />
    </Helmet>
    <Grain css={Texture} />
    <Hero data={hero} />
    <Layout>
      <About data={about} />
      <Speakers data={speakers} />
      <Where data={where} />
      <Connect data={connect} />
      <FAQ data={faq} />
      <Sponsors data={sponsors} />
      <Footer />
    </Layout>
  </>
)

export default ({ data }) => {
  const hero = data.prismic.allHeros.edges[0].node
  const countdown = data.prismic.allCountdowns.edges[0].node
  const about = data.prismic.allAbouts.edges[0].node
  const connect = data.prismic.allConnects.edges[0].node
  const speakers = data.prismic.allSpeakerss.edges[0].node
  const where = data.prismic.allWhere_and_whens.edges[0].node
  const faq = data.prismic.allFaqs.edges[0].node
  const sponsors = data.prismic.allSponsorss.edges[0].node

  return (
    <RenderBody
      hero={hero}
      countdown={countdown}
      about={about}
      connect={connect}
      speakers={speakers}
      where={where}
      faq={faq}
      sponsors={sponsors}
    />
  )
}

export const query = graphql`
  {
    prismic {
      allCountdowns {
        edges {
          node {
            date
            hero_text {
              line1
              line2
              line3
            }
            subtext
          }
        }
      }
      allAbouts {
        edges {
          node {
            title
            theme_title
            theme_description
            description
            theme_image
          }
        }
      }
      allConnects {
        edges {
          node {
            connect_description
            connect_title
            social_description
            instagram_url
            facebook_url
            connect_image
          }
        }
      }
      allSpeakerss {
        edges {
          node {
            speakers {
              speaker {
                ... on PRISMIC_Speaker {
                  speaker_name
                  speaker_title
                  speaker_image
                  speaker_bio
                }
              }
            }
            speakers_description
            speakers_title
          }
        }
      }

      allHeros {
        edges {
          node {
            first_line
            second_line
            subtext
            third_line
            hero_description
            header_cta_text
            ticker_text
            header_cta_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }

      allWhere_and_whens {
        edges {
          node {
            date
            date_details
            date_time
            date_image
            date_title
            where_title
            where_description
            ticketing_description
            ticketing
            ticketing_button_text
            ticketing_button_url
            virtual_description
            virtual_header
            add_to_calender {
              ... on PRISMIC__FileLink {
                url
              }
            }
          }
        }
      }

      allFaqs {
        edges {
          node {
            faqs {
              answer
              question
            }
          }
        }
      }
      allSponsorss {
        edges {
          node {
            sponsor_images {
              image
            }
            sponsors_description
            sponsors_header
          }
        }
      }

      allHeros {
        edges {
          node {
            first_line
            second_line
            subtext
            third_line
            header_cta_text
            header_cta_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
                target
              }
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
