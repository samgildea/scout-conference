import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global } from "@emotion/core"
import globalStyles from "styles/global"
import typeStyles from "styles/typography"
import dimensions from "styles/dimensions"
import "styles/fonts.scss"
import Header from "../components/Header/Header"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../styles/variabes"

const LayoutContainer = styled.div`
  padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};

  margin: 0 auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
  }
`

const LayoutBody = styled.div``

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutBody>
        <Header />

        <LayoutContainer className="div">
          <Global styles={[globalStyles, typeStyles]} />

          <main className="Layout__content">{children}</main>
        </LayoutContainer>
      </LayoutBody>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
