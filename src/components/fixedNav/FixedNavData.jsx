import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const FixedNavData = [
  {
    title: 'Overview',
    path: '/overview',
  },
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

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
