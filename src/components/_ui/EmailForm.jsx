import React from "react"
import Button from "./Button"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"

const EmailInput = styled.input`
  width: 41vw;
  height: 56px;
  padding-left: 55px;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Epilogue", sans-serif;
  border: 2px solid ${colors.black900};
  margin-top: 39px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 80vw;
    height: 42px;
    padding-left: 19px;
    margin-top: 10px;
  }

  color: ${colors.black900};
  ::placeholder {
    color: ${colors.black900};
  }
`

const SubmitButton = styled(Button)`
  padding-top: 24px;
  float: right;
`

const HiddenInput = styled.div`
  position: absolute;
  left: -5000000px;
`

const EmailForm = () => (
  <form
    action="https://neu.us8.list-manage.com/subscribe/post?u=9472ea0d65643ed3088719602&amp;id=49822c66b2"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    novalidate
  >
    <EmailInput
      placeholder="email address"
      name="EMAIL"
      type="email"
      id="mce-EMAIL"
      required
    />
    {/* Anti-bot measures. Do not remove. */}
    <HiddenInput aria-hidden="true">
      <input
        type="text"
        name="b_9472ea0d65643ed3088719602_49822c66b2"
        tabindex="-1"
        value=""
      />
    </HiddenInput>
    <SubmitButton type="submit" name="subscribe" id="mc-embedded-subscribe">
      SUBMIT
    </SubmitButton>
  </form>
)

export default EmailForm
