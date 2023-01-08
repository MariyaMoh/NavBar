import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
  {
    title: 'Classifier',
    path: '/classifier',
  },
  {
    title: 'Well Indexex',
    path: '/wellindexex',
  },
  {
    title: 'Map',
    path: '/map',
  },
  {
    title: 'Reports',
    path: '/reports',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
