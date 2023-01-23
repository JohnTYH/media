import React, {useState} from "react";
import styled from 'styled-components';



const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    wdith: 856px;
    margin-left: 16px;
    margin-right: 16px;
    border: 1px solid;

`

const Title = styled.div`
    padding-left: 20px;
`
const Header = styled.div`
    padding-bottom: 5px;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const FormSubcontainer = styled.div`
    display: flex;
    flex-direction: row;
    // padding-top: 10px;
    width: 100%;
`
const FormInnerContainer = styled.div`
    width: 400px;
    padding: 8px 20px 8px 20px;
`
const FormInnerContainer2 = styled.div`
    padding: 8px 20px 8px 20px;
`

const FormInput = styled.textarea`
    width: 100%;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    outline: none;
    resize: none;
    background-color: #ffffff;
    border-color: #dddddd;
    color: #333333;
    font-family: arial;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 15px;
    margin-top: 0px;
    padding: 5px 12 px;
    text-align: left;
    text-transform: none;
`
const FormDate = styled.input`
    width: 100%;
    padding: 2px;
`

export const ContactForm = () => {
    return(
        <MainContainer>
            <Title>Love to hear from you,
                <br/>Get in touch
            </Title>

            <FormContainer>
                <FormSubcontainer>
                    <FormInnerContainer>
                        <Header>
                            Name
                        </Header>
                        <FormInput rows="1"/>
                    </FormInnerContainer>
                    <FormInnerContainer>
                        <Header>
                            Email
                        </Header>
                        <FormInput rows="1"/>
                    </FormInnerContainer>
                </FormSubcontainer>
                <FormSubcontainer>
                    <FormInnerContainer>
                        <Header>
                            Phone
                        </Header>
                        <FormInput rows="1"/>
                    </FormInnerContainer>
                    <FormInnerContainer>
                        <Header>
                            Date of Event
                        </Header>
                        <FormDate type="date"/>
                    </FormInnerContainer>
                </FormSubcontainer>
                   <FormInnerContainer2>
                        <Header>
                            Message
                        </Header>
                        <FormInput />
                    </FormInnerContainer2>
                    <FormInnerContainer2>
                        <Header>
                            Reference (if any)
                        </Header>
                        <FormInput/>
                    </FormInnerContainer2>

            </FormContainer>
        </MainContainer>
    )
}

export default ContactForm;