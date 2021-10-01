import React from "react"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import Question from "../../components/_ui/Question"

const FAQWrapper = styled.div`
  position: relative;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-right: 25px;
  }
`

const FAQContainer = styled.div`
  background-color: ${colors.grey900};

  width: 72vw;
  border-radius: 12px;
  position: relative;
  border: 2px solid ${colors.black900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const FAQHeader = styled.div`
  padding-left: 72px;
  padding-top: 25px;

  padding-bottom: 25px;
  border-bottom: 2px solid ${colors.black900};
  font-size: calc(27px + (55 - 27) * ((100vw - 300px) / (1600 - 300)));
  font-family: "FreightText-SemiBold";
`
const FaqLink = styled.div`
  margin-top: 80%;
  height: 100px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 606px;
  }
`

export const FAQ = ({ data }) => {
  return (
    <>
      <FAQWrapper>
      <FaqLink id="faqs"></FaqLink>

        <FAQContainer>

          <FAQHeader>FAQs</FAQHeader>

          {data.faqs.map((question, i) => (
            i === data.faqs.length - 1 ?
            <Question last="true" key={i} question={question} />
            :  <Question last="false"  key={i} question={question} />

          ))}
        </FAQContainer>
      </FAQWrapper>
    </>
  )
}
export default FAQ
