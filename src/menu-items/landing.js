// assets
import { CaretRightOutlined } from '@ant-design/icons';

// icons
const icons = {
  CaretRightOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const landing = {
  id: 'about',
  title: 'Landing',
  type: 'group',
  children: [
    {
      id: 'landing-page',
      title: 'Landing',
      type: 'item',
      url: '/landing-page',
      icon: icons.CaretRightOutlined
    }
  ]
};

export default landing;
