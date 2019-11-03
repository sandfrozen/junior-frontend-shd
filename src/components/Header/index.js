import React from "react";

import { Root, Wrapper, Logo, Navigation, NavLink } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navigation>
        <NavLink>Start</NavLink>
        <NavLink>My Profile</NavLink>
      </Navigation>
    </Wrapper>
  </Root>
);
