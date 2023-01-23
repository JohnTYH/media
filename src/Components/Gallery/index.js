import React from 'react';
import styled from 'styled-components'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Wrapper = styled.div`
  padding-top: 6%;
  padding-right: 4%;
  padding-left: 4%;
  @media (max-width: 768px) {
    display: block;
    padding-top: 20%;
  }
`

const MainImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const GallerySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.5%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
const GalleryImage = styled.img`
  width: 100%;
  padding-bottom: 15px;
  border-radius: 5px;
`

export const Gallery = ({data}) => {
  console.log(data)
  return (
    <Wrapper>
    <MainImage src={data[0].main}/>
    <GalleryContainer>
      <GallerySubContainer>
        {data.map((item, idx) => (
          <>
          {idx <= 4 &&
            <GalleryImage
              src={item.img}
              loading="lazy"
            />
          }
          </>
        ))}
      </GallerySubContainer>
      <GallerySubContainer>
        {data.map((item, idx) => (
          <>
             {(idx > 4 && idx <= 9) &&
              <GalleryImage
                src={item.img}
                loading="lazy"
              />
            }
            </>
        ))}
      </GallerySubContainer>
      <GallerySubContainer>
      {data.map((item, idx) => (
          <>
             {(idx > 9 && idx <= 14) &&
              <GalleryImage
                src={item.img}
                loading="lazy"
              />
            }
            </>
        ))}
      </GallerySubContainer>
      <GallerySubContainer>
      {data.map((item, idx) => (
          <>
             {(idx > 14) &&
              <GalleryImage
                src={item.img}
                loading="lazy"
              />
            }
            </>
        ))}
      </GallerySubContainer>
    </GalleryContainer>
  </Wrapper>
  );
}

export default Gallery;


