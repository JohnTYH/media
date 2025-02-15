import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuLink = styled(Link)`
  padding: 8px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000000;
  transition: all 0.3s ease-in;
  font-size: 1.1 rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  padding: 0 5.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #000000;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.5rem;
  span {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
    z-index: 10;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #000000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/media-portfolio/">
        Limelight<span>Studios</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <MenuLink to="/">Home</MenuLink>
        {/* <MenuLink to='/about'>About</MenuLink> */}
        <MenuLink to="/photography">Photography</MenuLink>
        {/* <MenuLink to='/videography'>Videography</MenuLink> */}
        <MenuLink to="/contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
