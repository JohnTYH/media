import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

import img1 from "../../Images/Home/John-402180.jpg";
import img2 from "../../Images/Home/maisonbowl.jpg";
import img3 from "../../Images/Home/John-04339.jpg";
import img4 from "../../Images/Home/John-09535.jpg";
import img7 from "../../Images/Home/John-04408.jpg";
import img8 from "../../Images/Home/John-09953-3.jpg";
import Yishion from "../../Images/Home/yishion.jpg";
import Fitmonkie from "../../Images/Home/fitmonkie.jpg";
import Wedding from "../../Images/Home/wedding.jpg";

const MainContainer = styled.div`
  padding-left: 5.5%;
  padding-right: 5.5%;
`;

const LandingImageContainer = styled.img`
  height: 980px;
  width: 100%;
  max-inline-size: 100%;
  object-fit: cover;
  @media only screen and (max-width: 780px) {
    height: 83vh;
  }
`;

const ProjectDualImageContainer = styled.div`
  display: flex;
  padding: 25px 0 0 0;
  @media (max-width: 768px) {
    display: block;
    padding: 20px 0 0 0;
  }
`;

const ProjectDualImageContainerPortrait = styled.div`
  display: flex;
  padding: 25px 0 0 0;
`;

const ProjectImageContainer = styled.div`
  display: flex;
  padding: 40px 50px 0 50px;
  @media (max-width: 768px) {
    padding: 20px 0 0 0px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  font-family: "Satoshi", sans-serif;
  line-height: 1;
  font-size: 2.5rem;
  font-weight: "lighter";
`;

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ServicesImageContainer = styled.img`
  min-width: 100%;
  display: block;
  height: 500px;
  object-fit: cover;
`;

const LeftContainer = styled.div`
  padding: 0 20px 0 0;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const TextHeader = styled.div`
  display: flex;
  font-family: futura-pt;
  font-size: 1.5rem;
`;

const TextBox = styled.div`
  font-family: "Degular Display", sans-serif;
  font-size: 0.85rem;
  color: #61534d;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 150px 0 0 20px;
  @media (max-width: 768px) {
    padding: 20px 0 0 0px;
  }
`;

const ContainerPortrait = styled.div`
  padding 0 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 3px;
  }
`;

const Padding = styled.div`
  padding: 20px 0 0 0;
`;

const ServicesContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;
const ContainerJNH = styled.div``;

const ContainerWedding = styled.div``;

const Container = styled.div`
  display: flex;
  padding: 25px 0 0 0;
  @media (max-width: 768px) {
    display: block;
    padding: 20px 0 0 0;
  }
`;

const ContainerText = styled.div`
  padding: 25px 0 0 0;
  padding-left: 3%;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const TextBox2 = styled.div`
  font-family: "Degular Display", sans-serif;
  font-size: 1.4rem;
  text-align: justify;
  text-justify: inter-word;
  color: #61534d;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const SubHeader = styled.div`
  font-family: "Degular Display", sans-serif;
  font-size: 1rem;
  color: #61534d;
  padding: 62px 0 5px 0;
`;
const AboutMeHeader = styled.span`
  font-family: "Satoshi", sans-serif;
  line-height: 1;
  font-size: 2.5rem;
  font-weight: 100;
`;
const ColorHeader = styled.div`
  font-family: "Satoshi", sans-serif;
  line-height: 1;
  font-size: 2.3rem;
  font-weight: 100;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(60deg, #e21143, #ffb03a);
  color: transparent;
  padding-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const HeaderContainer = styled.div`
  display: inline-block;
`;

const SponsoredContainer = styled.div`
  padding 0 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 3px;
}`;

const Wrapper = styled.div`
  padding: 20px 0 0 0;
`;

export const Home = () => {
  const history = useNavigate();

  return (
    <>
      <LandingImageContainer src={img7} />
      <MainContainer>
        <HeaderContainer>
          <SubHeader>ABOUT ME</SubHeader>
          <AboutMeHeader>Behind The Lens: </AboutMeHeader>
          <ColorHeader> A Photographer and Videographer's Journey</ColorHeader>
        </HeaderContainer>
        <ServicesContainer>
          <Container>
            <ServicesImageContainer src={img8} />
          </Container>
          <ContainerText>
            <TextBox2>{data.aboutMeLanding}</TextBox2>
            <Wrapper>
              <TextBox2>{data.aboutMeLanding2}</TextBox2>
            </Wrapper>
            {/* <Wrapper><Test>about me</Test></Wrapper> */}
            {/* <Button>Photography</Button>
                    <Button>Videography</Button> */}
          </ContainerText>
        </ServicesContainer>
        <SubHeader>GALLERY</SubHeader>
        <ProjectHeader>Featured Projects</ProjectHeader>
        <ProjectImageContainer>
          <ContainerWedding>
            <ImageContainer
              src={Wedding}
              onClick={() => history("/Weddings")}
            />
            <TextHeader>Wedding Proposal</TextHeader>
            <TextBox>Swan Lake @ Botanic Gardens</TextBox>
          </ContainerWedding>
        </ProjectImageContainer>
        <ProjectDualImageContainerPortrait>
          <ContainerPortrait>
            <ImageContainer
              src={Fitmonkie}
              onClick={() => history("/Portraits")}
            />
          </ContainerPortrait>
          <ContainerPortrait>
            <ImageContainer
              src={Yishion}
              onClick={() => history("/Portraits")}
            />
          </ContainerPortrait>
        </ProjectDualImageContainerPortrait>
        <SponsoredContainer>
          <TextHeader>Sponsored Shoots</TextHeader>
          <TextBox>Fitmonkie x Yishion</TextBox>
        </SponsoredContainer>
        <ProjectDualImageContainer>
          <LeftContainer>
            <ImageContainer
              src={img1}
              onClick={() => history("/Performances")}
            />
            <TextHeader>Stage Performances</TextHeader>
            <TextBox>University Cultural Centre</TextBox>
          </LeftContainer>
          <RightContainer>
            <ImageContainer src={img2} onClick={() => history("/Food")} />
            <Padding />
            <ImageContainer src={img4} onClick={() => history("/Food")} />
            <TextHeader>Food Photography</TextHeader>
            <TextBox>Maison Bowl SG</TextBox>
          </RightContainer>
        </ProjectDualImageContainer>
        <ProjectImageContainer>
          <ContainerJNH>
            <ImageContainer src={img3} onClick={() => history("/Portraits")} />
            <TextHeader>Pageant and Formal Shoots</TextHeader>
            <TextBox>NUS Business - Jam & Hop Pageant</TextBox>
          </ContainerJNH>
        </ProjectImageContainer>
        {/* <ContactContainer>
                <ContactForm></ContactForm>
            </ContactContainer>
            <Padding2></Padding2> */}
      </MainContainer>
    </>
  );
};

export default Home;
