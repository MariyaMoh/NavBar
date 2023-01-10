import React, { useState } from 'react';
import styled from 'styled-components';
import { FixedNavData } from './FixedNavData';
import { IconContext } from 'react-icons/lib';
import SubMenuFixed from './SubMenuFixed';

const SidebarWarp = styled.nav`
  padding-top: 9rem;
  gap: 0.1rem;
  padding-left: 2rem;
  background: white;
  color: black;
  width: 13%;
  display: flex;
  flex-direction: column;
  font-family: arial, verdana, san-serif;

  @media screen and (max-width: 600px) {
    padding-top: 0;
    gap: 0.1rem;
    // background: red;
    padding-left: 0;
  }
`;

export const FixedNav = () => (
  <SidebarWarp>
    {FixedNavData.map((item, index) => {
      return <SubMenuFixed item={item} key={index} />;
    })}
  </SidebarWarp>
);
