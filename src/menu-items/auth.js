// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
// import { useState } from 'react';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

const isLoginEnabled = localStorage.getItem('token') || false;
// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

// const [isLoggedIn, setIsLoggedIn] = useState("");

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    ...(isLoginEnabled
      ? [
          {
            id: 'disabledLogin',
            title: 'Logout',
            type: 'item',
            url: '/logout',
            icon: icons.LoginOutlined,
            target: true
          }
        ]
      : [
          {
            id: 'login1',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            target: true
          },
          {
            id: 'register1',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
          }
        ])
  ].filter(Boolean)
};

export default pages;
