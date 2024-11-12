// assets
import { FolderAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  FolderAddOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const addAlbum = {
  id: 'addAlbum',
  type: 'group',
  children: [
    {
      id: 'addAlbum-page',
      title: 'Add Album',
      type: 'item',
      url: '/addAlbum-page',
      icon: icons.FolderAddOutlined
    }
  ]
};

export default addAlbum;
