import React from "react";
import styled from 'styled-components';
import ContactForm from "../../Components/ContactForm";

const Wrapper = styled.div`
    padding-top: 16%;
    margin: auto;
    max-width: 900px;
    width: 100%;
`
export const Contact = () => {
    return(
        <Wrapper>
            <ContactForm>

            </ContactForm>
        </Wrapper>
    )
}

export default Contact;