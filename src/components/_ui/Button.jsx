import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import ButtonArrow from "../../vectors/ButtonArrow.svg"

const ButtonContainer = styled("button")`
  font-family: "FreightText-Medium-Italic";
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: calc(16px + (25 - 16) * ((100vw - 300px) / (1600 - 300)));
  color: ${colors.blue900};
  display: flex;
  svg {
    margin-top: 2px;
    margin-left: 10px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    svg {
      width: 23px;
      height: 19px;
    }
  }
`

class Button extends Component {
  render() {
    const { children, ...props } = this.props

    return (
      <div>
        {/* <Ticker move={this.state.moving ? true : false} speed={30}> */}
        {/* {({ index }) => ( */}
        <ButtonContainer onClick={this.props.onClick} {...props}>
          <span>{this.props.children}</span>
          <ButtonArrow />
        </ButtonContainer>
        {/* )} */}
        {/* </Ticker> */}
      </div>
    )
  }
}

export default Button
