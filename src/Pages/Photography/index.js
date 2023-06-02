import React from "react";
import styled from "styled-components";
import CategoryGrid from "../../Components/CategoryGrid/index";
import TopCategoryGrid from "../../Components/CategoryGrid/topGrid";

import Portraits from "../../Images/Category/Portraits.jpg";
import Events from "../../Images/Category/Events.jpg";
import Performances from "../../Images/Category/Performances.jpg";
import Food from "../../Images/Category/Food.jpg";
import Sports from "../../Images/Category/Sports.jpg";
import Grad from "../../Images/Category/Grad.jpg";
import Weddings from "../../Images/Category/Weddings.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6%;
  padding-left: 3%;
  padding-right: 3%;
  @media (max-width: 768px) {
    display: block;
    padding-top: 20%;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;
`;

const CardPadding = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

const topGridData = [
  {
    image: Weddings,
    description: "Weddings",
  },
];
const data = [
  {
    image: Portraits,
    description: "Portraits",
  },
  {
    image: Events,
    description: "Events",
  },
  {
    image: Performances,
    description: "Performances",
  },
  {
    image: Food,
    description: "Food",
  },
  {
    image: Grad,
    description: "Graduation",
  },
  {
    image: Sports,
    description: "Sports",
  },
];

export const PhotographyMain = () => {
  return (
    <Wrapper>
      <CardPadding>
        <TopCategoryGrid
          image={topGridData[0].image}
          description={topGridData[0].description}
        />
      </CardPadding>
      <BottomWrapper>
        {data.map((item, idx) => (
          <CardPadding>
            <CategoryGrid image={item.image} description={item.description} />
          </CardPadding>
        ))}
      </BottomWrapper>
    </Wrapper>
  );
};

export default PhotographyMain;
