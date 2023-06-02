import React from "react";
import InstagramIcon from "../../Images/Icons/Instagram.svg";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex: column;
  padding: 30px 10%;
  background-color: #e5e5e5;
  align-items: center;
`;

const Text = styled.div`
  font-size: 16px;
`;

const IconContainer = styled.div`
  padding-left: 10px;
`;
const Icon = styled.img`
  width: 24px;
`;

// const FooterContainer = styled.footer`
//   display: flex;
//   align-items: center;
// `;

const InstagramLink = styled.a`
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>Limelight Studios</Text>
      <IconContainer>
        <InstagramLink
          target="_blank"
          href="https://www.instagram.com/diningavenue"
        >
          <Icon src={InstagramIcon} alt="Instagram" />
        </InstagramLink>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
