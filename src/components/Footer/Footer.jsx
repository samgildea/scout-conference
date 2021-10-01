import React from "react"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import Facebook from "../../vectors/footerfacebook.svg"
import Twitter from "../../vectors/twitter.svg"
import Instagram from "../../vectors/instagram.svg"
import EmailForm from "../_ui/EmailForm"

const FooterContainer = styled.div`
  background-color: ${colors.grey900};
  position: absolute;
  left: 0;
  border-top: 2px solid ${colors.black900};
  width: 100%;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
  }
`

const FooterHeader = styled.div`
  margin-top: 64px;
  font-family: "FreightText-Regular";
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;

  span {
    font-family: "FreightText-SemiBold";
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
  }
`

const NewsletterBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 64px;
`

const Copyright = styled.div`
  font-family: "FreightText-SemiBold";
  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));
  padding-top: 47px;
  padding-left: 104px;
  padding-bottom: 68px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    position: absolute;
    bottom: 0;
    left: 25px;
    padding: 0;
    margin-bottom: 25px;
  }
`

const SocialIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding-top: 47px;

  padding-right: 4vw;
  div {
    padding-right: 34px;
  }

  .facebook {
    width: 14px;
    height: 30px;
  }

  .twitter {
    width: 34px;
    height: 30px;
  }

  .instagram {
    width: 34px;
    height: 30px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    position: absolute;
    margin-bottom: 25px;

    bottom: 0;
    right: 0;
    div {
      padding-right: 24px;
    }

    .facebook {
      width: 24px;
      height: 24px;
    }

    .twitter {
      width: 24px;
      height: 24px;
    }

    .instagram {
      width: 24px;
      height: 24px;
    }
  }
`

const FooterGradient = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  img {
    width: 100%;
  }
`

export const Footer = () => {
  return (
    <>
      <FooterGradient></FooterGradient>
      <FooterContainer>
        <NewsletterBlock>
          <div>
            <FooterHeader>
              Sign up <span> for updates</span>
            </FooterHeader>
            <EmailForm />
          </div>
        </NewsletterBlock>
        <div className="copyright-social">
          <SocialIcons>
            <div>
              <a href="https://www.facebook.com/neuscout" target="_blank">
                <Facebook className="facebook" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/neuscout?lang=en" target="_blank">
                <Twitter className="twitter" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/interventionsbyscout/"
                target="_blank"
              >
                <Instagram className="instagram" />
              </a>
            </div>
          </SocialIcons>
          <Copyright>Scout 2021</Copyright>
        </div>
      </FooterContainer>
    </>
  )
}

export default Footer
