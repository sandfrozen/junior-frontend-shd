import React from "react";

import { Root, Wrapper, Logo, Navigation, NavLink } from "./styles";
import {Link} from 'react-router-dom'

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navigation>
        <NavLink to="/">Start</NavLink>
        <NavLink to="/my-profile">My Profile</NavLink>
      </Navigation>
    </Wrapper>
  </Root>
);
