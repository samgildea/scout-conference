import React, { useState } from "react"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import ScoutLogo from "../../images/scoutlogo.png"
import dimensions from "styles/dimensions"
import Hamburger from "../../vectors/hamburger.svg"
import HamburgerClose from "../../vectors/hamburgerclose.svg"
import { navIndex } from "../../styles/variabes"

const HeaderContainer = styled.nav`
  top: 0;
  z-index: ${navIndex};
  position: fixed;
  background-color: ${colors.grey900};
  width: 100%;
  height: 55px;
  border-bottom: 2px solid ${colors.black900};
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    height: 77px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    &.open {
      height: 100vh;
      position: fixed;
    }
  }
`
const Logo = styled.div`
  position: absolute;
  top: 12px;
  left: 26px;

  img {
    width: 18px;
    height: 31px;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    top: 14px;

    left: 100px;

    img {
      width: 27px;
      height: 48px;
    }
  }
`
const NavLinks = styled.div`
  font-family: "FreightText-SemiBold";
  font-size: 18px;
  position: absolute;
  right: 97px;
  top: 0;

  ul {
    display: none;
    list-style: none;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    a {
      text-decoration: none;
      color: ${colors.black900};

      &:hover {
        border-bottom: 2px solid ${colors.black900};
      }
    }

    ul {
      display: flex;
      list-style: none;
    }

    li {
      padding-top: 25px;
      padding-left: 48px;
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    &.open {
      left: 89px;
      top: 10vh;
      width: 100%;
      position: absolute;
      ul {
        display: initial;
      }

      li {
        font-size: 24px;
        margin-bottom: 8vh;
      }

      a {
        text-decoration: none;
        color: ${colors.black900};

        &:hover {
          border-bottom: 2px solid ${colors.black900};
        }
      }
    }
  }
`

const HamburgerMenu = styled.div`
  top: 16px;
  right: 25px;
  position: absolute;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer className={open ? "open" : ""}>
      <Logo>
        <a href="#home">
          <img src={ScoutLogo} alt="" />
        </a>
      </Logo>

      <NavLinks className={open ? "open" : ""}>
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#speakers">SPEAKERS</a>
          </li>
          <li>
            <a href="#where">WHERE & WHEN</a>
          </li>
          <li>
            <a href="#connect">CONNECT</a>
          </li>
          <li>
            <a href="#faqs">FAQS</a>
          </li>
        </ul>
      </NavLinks>
      <HamburgerMenu
        onClick={() => setOpen(!open)}
        className={open ? "open" : ""}
      >
        {!open ? <Hamburger /> : <HamburgerClose />}
      </HamburgerMenu>
    </HeaderContainer>
  )
}

export default Header
