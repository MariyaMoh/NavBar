import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
export default function Navbar() {
  return (
    <div>
      <>
        <div>
          <img src="/logo.jpg" alt="" />

          <img src="/logo2.png" alt="" />

          <div>
            <div>
              <BiIcons.BiUserCircle /> &nbsp;<p>Ahmed Shakhaili (U123)</p>
            </div>
            <FaIcons.FaBars /*onClick={showSidebar} */ />
          </div>
        </div>
      </>
    </div>
  );
}
