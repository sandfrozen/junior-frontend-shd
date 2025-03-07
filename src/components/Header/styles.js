import React from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.svg";
import {Link} from 'react-router-dom'

export const Logo = () => <img alt="Startup Development House" src={logoImg} />;

export const Root = styled.header`
  height: 5rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  height: 100%;
  width: 130px;
  display: flex;
  justify-content: space-between;
`

export const NavLink = styled(Link)`
  align-self: center;
  font-weight: bold;
  
  text-decoration: none;
  color: black;
`
