import React, {useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";



const MainContainer = styled.div`
    position: relative;    
    background: black;
    width: 491px;
    height: 298px;
    @media (max-width: 768px) {
        width: 100%;
      }
`

const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${props => props.hovering ? "30%" : "100%"};
    transition: opacity 0.15s ease-out;
    @media (max-width: 768px) {
        opacity: 30%;
      }
`

const Description = styled.div`
font-family: helvetica, sans-serif;
font-size: 1.7rem;
color: ${props => props.hovering ? "white": "transparent"};
text-align: center;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: fit-content;
margin: auto;
transition: color 0.15s ease-out;
// text-decoration: line-through;
@media (max-width: 768px) {
    color: white;
  }
`

export const CategoryGrid = ({image, description}) => {
    const [isHovering, setIsHovering] = useState(false);
    const history = useNavigate();
    const home = () => {
        history("/" + description);
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    return(
        <MainContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={home}>
            <ImageContainer src={image} hovering={isHovering} loading="lazy"/>
                <Description hovering={isHovering}>{description}</Description>
        </MainContainer>
    )
}

export default CategoryGrid;