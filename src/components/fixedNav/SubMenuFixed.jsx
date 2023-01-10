import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  width: 15rem;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  list-style: none;
  height: 3rem;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    border-style: solid;
    border-color: #00a759;
    cursor: pointer;
    background: #e3e3e3;
    width: 15rem;
    height: 2.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    height: 1.5rem;
    // background: red;
    width: 8rem;

    &:hover {
      width: 8rem;
      height: 1.5rem;
    }
  }
`;
const DropdownLink = styled(Link)`
  height: 3rem;
  padding-left: 4rem;
  width: 15rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  // font-size: 18px;
  &:hover {
    border-style: solid;
    border-color: #00a759;
    cursor: pointer;
    background: #e3e3e3;
    width: 15rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;

    height: 1.5rem;
    &:hover {
      width: 8rem;
      height: 1.5rem;
    }
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const SubMenuFixed = ({ item }) => {
  const [subnav, setSubNav] = useState(false);

  const showSubnav = () => setSubNav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenuFixed;
