import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AlbumPage from 'pages/albums/albums';
import Landing from 'pages/landing/landing';
// import { element } from 'prop-types';
// import path from 'path';
// import { element } from 'prop-types';

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/album-page',
      element: <AlbumPage />
    },
    {
      path: '/about-page',
      element: <SamplePage />
    },
    {
      path: '/landing-page',
      element: <Landing />
    }
  ]
};

export default MainRoutes;
