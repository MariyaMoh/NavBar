import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';

const Nav = styled.div`
  background: #ffffff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  font-family: arial, verdana, san-serif;
  @media screen and (max-width: 600px) {
    // background: red;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #000000;
  gap: 1rem;
  text-decoration: none;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;

    margin-left: 0 !important;
  }
`;

const UserNavIcon = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #000000;
  text-decoration: none;
  // background: blue;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoDesktop = styled.img`
  max-width: 20%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoMobile = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    max-width: 2rem;
  }
`;

const Sidebar = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* <IconContext.Provider value={{ color: 'black' }}> */}
      <Nav>
        <LogoDesktop src="/logo.jpg" alt="" />

        <LogoMobile src="/logo2.png" alt="" />

        <NavIcon>
          <UserNavIcon>
            <BiIcons.BiUserCircle /> &nbsp;<p>Ahmed Shakhaili (U123)</p>
          </UserNavIcon>
          <FaIcons.FaBars /*onClick={showSidebar} */ />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Sidebar;
