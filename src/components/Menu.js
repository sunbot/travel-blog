import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = styled.header`
  border-top: 7px solid #ef8e58;
  background: white;
  width: 100%;
  padding: 1.5em 0;
`;
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: #ef8e58;
      border-bottom: 2px solid ${props => props.theme.colors.base};
    }
  }
`;

const activeLinkStyle = {
  color: "#EF8E58"
  // borderBottom: "2px solid black"
};

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              {/* <div class="px-6 py-10">
                <div class="flex flex-wrap"> */}
              Hop, Skip, and Jump
              {/* </div>
              </div> */}
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Menu;
