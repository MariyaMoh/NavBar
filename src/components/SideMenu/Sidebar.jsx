import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as RxIcons from 'react-icons/rx';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import SubMenu from './SubMenu';

const Nav = styled.div`
  background: #ffffff;
  padding: 4rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  float: right;
  gap: 1rem;
  font-family: arial, verdana, san-serif;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.1rem;
  height: rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #000000;
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  width: 22.5rem;
  height: 100vh;
  display: flex;
  justify-conent: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-o=index: 10;
  background: black;
`;
const SidebarWarp = styled.nav`
  font-family: arial, verdana, san-serif;
  padding-top: 3.5rem;
  padding-right: 4rem;
  background: #ffffff;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-conent: flex-start;
  // position: absolute;
  // right: 0;
`;

const Logo = styled.img`
  width: 20%;
  padding-left: 4rem;
  position: absolute;
  left: 0;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav>
          <NavIcon>
            <Logo src="/logo.jpg" alt="" />
          </NavIcon>
          <NavIcon>
            <p>TCIS Admin</p>
          </NavIcon>
          <NavIcon>
            <HiIcons.HiOutlineHome />
          </NavIcon>
          <NavIcon>
            <HiIcons.HiOutlineQuestionMarkCircle />
          </NavIcon>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWarp>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWarp>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
