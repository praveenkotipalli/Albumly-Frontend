// assets
import { PictureOutlined } from '@ant-design/icons';

// icons
const icons = {
  PictureOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const album = {
  id: 'album',
  title: 'Albums',
  type: 'group',
  children: [
    {
      id: 'album-page',
      title: 'Album Page',
      type: 'item',
      url: '/album-page',
      icon: icons.PictureOutlined
    }
  ]
};

export default album;
