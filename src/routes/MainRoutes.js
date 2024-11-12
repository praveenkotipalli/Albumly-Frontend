import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AlbumPage from 'pages/albums/albums';
import Landing from 'pages/landing/landing';
import AddAlbumForm from 'pages/albums/addAblum';
import AlbumShowPage from 'pages/albums/albumShow';
import AlbumUpload from 'pages/albums/albumUpload';
// import PhotosShowPage from 'pages/albums/albums/photoGrid';
// import PhotoPage from 'pages/albums/photos/photos';
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
    },
    {
      path: '/addAlbum-page',
      element: <AddAlbumForm />
    },
    {
      path: '/album/show',
      element: <AlbumShowPage />
    },
    {
      path: '/album/upload',
      element: <AlbumUpload />
    }
  ]
};

export default MainRoutes;
