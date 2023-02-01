import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Wrapper = styled.div`
  padding-top: 6%;
  padding-right: 4%;
  padding-left: 4%;
  @media (max-width: 768px) {
    display: block;
    padding-top: 20%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const GalleryInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const GallerySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.5%;

  @media (max-width: 768px) {
    width: 49%;
  }
`;
const GalleryImage = styled.img`
  width: 100%;
  padding-bottom: 15px;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding-bottom: 5px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 65px 0;
  justify-content: end;
  align-items: center;
  @media (max-width: 768px) {
    padding: 30px 0 30px 0;
    font-size: 0.85rem;
  }
`;

const DescriptionHeader = styled.div`
  max-width: 800px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  font-family: "Satoshi", sans-serif;
  line-height: 1;
  font-size: 2.5rem;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 2.35rem;
    padding-bottom: 15px;
  }
`;

const DescriptionText = styled.div`
  max-width: 800px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  text-align: justify;
  font-family: "Degular Display", sans-serif;
  font-size: 1.2rem;
  color: #61534d;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

const LeftLine = styled.div`
  display: flex;
  width: 800px;
  height: 2px;
  background: #000;
  left: 0;
  top: 50%;
  background: linear-gradient(to right, rgba(240, 240, 240, 0), #000);
  margin: auto 0;
  margin-right: 10px;
  z-index: -2;
`;

const RightLine = styled.div`
  display: flex;
  width: 800px;
  height: 2px;
  background: #000;
  right: 0;
  top: 50%;
  background: linear-gradient(to left, rgba(240, 240, 240, 0), #000);
  margin: auto 0;
  margin-left: 10px;
  z-index: -2;
`;

const Divider = styled.div`
  display: flex;
  font-family: sans-serif;
  margin: 0 auto;
  text-align: center;
  font-size: 2.5rem;
  max-width: 1024px;
  position: relative;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const ButtonText = styled.div`
  padding: 30px 10px;
  display: flex;
  font-family: "Satoshi", sans-serif;
  line-height: 1;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 15px 0px;
  }
`;

const Padding = styled.div`
  padding-bottom: 60px;
  @media (max-width: 768px) {
    padding-bottom: 35px;
  }
`;

export const Gallery = ({ data }) => {
  var w = window.innerWidth;
  const [width, setWidth] = useState(w);
  const history = useNavigate();

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  });

  return (
    <Wrapper>
      <MainImage src={data[0].main} />
      <DescriptionContainer>
        <DescriptionHeader>{data[0].header}</DescriptionHeader>
        <DescriptionText>{data[0].content}</DescriptionText>
        <DescriptionText>{data[0].content_2}</DescriptionText>
      </DescriptionContainer>
      <DividerContainer>
        <LeftLine />
        <Divider>Gallery</Divider>
        <RightLine />
      </DividerContainer>
      {width > 768 ? (
        <GalleryContainer>
          <GallerySubContainer>
            {data.map((item, idx) => (
              <>{idx <= 4 && <GalleryImage src={item.img} loading="lazy" />}</>
            ))}
          </GallerySubContainer>
          <GallerySubContainer>
            {data.map((item, idx) => (
              <>
                {idx > 4 && idx <= 9 && (
                  <GalleryImage src={item.img} loading="lazy" />
                )}
              </>
            ))}
          </GallerySubContainer>
          <GallerySubContainer>
            {data.map((item, idx) => (
              <>
                {idx > 9 && idx <= 14 && (
                  <GalleryImage src={item.img} loading="lazy" />
                )}
              </>
            ))}
          </GallerySubContainer>
          <GallerySubContainer>
            {data.map((item, idx) => (
              <>{idx > 14 && <GalleryImage src={item.img} loading="lazy" />}</>
            ))}
          </GallerySubContainer>
        </GalleryContainer>
      ) : (
        <GalleryContainer>
          <GallerySubContainer>
            {data.map((item, idx) => (
              <>{idx <= 9 && <GalleryImage src={item.img} loading="lazy" />}</>
            ))}
          </GallerySubContainer>
          <GallerySubContainer>
            {data.map((item, idx) => (
              <>{idx > 9 && <GalleryImage src={item.img} loading="lazy" />}</>
            ))}
          </GallerySubContainer>
        </GalleryContainer>
      )}
      <ButtonContainer onClick={() => history("/photography")}>
        <ChevronLeftIcon
          sx={{
            margin: "auto 0",
          }}
        />
        <ButtonText>Photography Gallery</ButtonText>
      </ButtonContainer>
      <Padding />
      {/* <iframe
        src="https://www.youtube.com/embed/PYTzJEJXa1E"
        allowFullScreen="true"
        webkitallowfullscreen="true"
      ></iframe> */}
    </Wrapper>
  );
};

export default Gallery;
