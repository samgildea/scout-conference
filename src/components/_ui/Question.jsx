import React, { useState } from "react"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import Expand from "../../vectors/expand.svg"
import Minimize from "../../vectors/minimize.svg"

const QuestionContainer = styled.div`

&.bottom {
  border-bottom: 2px solid ${colors.black900};

}

  margin-top: 40px;
  padding-bottom: 40px;

  .last {
    border-bottom: none;
  }
`

const QuestionTitle = styled.div`
  font-size: calc(25px + (40 - 25) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-SemiBold";
  color: ${colors.blue900};
  padding-left: 72px;
  cursor: default;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 21px;
  }
`

const ExpandIcon = styled.div`
  position: absolute;
  right: 23px;
`

const QuestionAnswer = styled.div`
  padding-left: 72px;
  padding-right: 72px;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));

  &.closed {
    display: none;
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 21px;
  }
`

export const Question = ({ question, last }) => {
  const [open, setOpen] = useState(false)

  return (
    <QuestionContainer className={last == "true" ? "last" : "bottom"}>
      <ExpandIcon onClick={() => setOpen(!open)}>
        {open ? <Minimize /> : <Expand />}
      </ExpandIcon>
      <QuestionTitle onClick={() => setOpen(!open)}>
        {question.question}{" "}
      </QuestionTitle>

      <QuestionAnswer className={open ? "" : "closed"}>
        {question.answer}
      </QuestionAnswer>
    </QuestionContainer>
  )
}

export default Question
