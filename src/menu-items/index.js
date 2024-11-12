// project import
import auth from './auth';
import album from './album';
import about from './about';
import landing from './landing';
import addAlbum from './addAlbum';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [landing, album, addAlbum, auth, about]
};

export default menuItems;
