import React from "react";
import styled from "styled-components";
import ContactForm from "../../Components/ContactForm";

const Wrapper = styled.div`
  padding-top: 16%;
  margin: auto;
  justify-content: center;
  width: 100%;
`;
const Text = styled.div`
  padding-top: 30px;
  margin: auto;
  text-align: center;
`;

export const Contact = () => {
  return (
    <Wrapper>
      <Text>~Coming Soon~</Text>
      {/* <ContactForm>

            </ContactForm> */}
    </Wrapper>
  );
};

export default Contact;
