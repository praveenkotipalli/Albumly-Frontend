// assets
import { ChromeOutlined, QuestionOutlined, FolderAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  FolderAddOutlined
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
