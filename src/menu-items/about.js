// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const about = {
  id: 'about',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'about-page',
      title: 'About',
      type: 'item',
      url: '/about-page',
      icon: icons.QuestionOutlined
    }
  ]
};

export default about;
