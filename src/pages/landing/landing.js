// material-ui
// import { Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

import Spline from '@splinetool/react-spline';

// project import
// import MainCard from 'components/MainCard';

// import splineLanding from "./spline/splineLanding";
// ==============================|| SAMPLE PAGE ||============================== //

const Landing = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('token');
  //   if (isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, []);
  return (
    <div style={{height:"screen", width:"screen"}}>
      <div style={{width:"full", height:"708px"}}>
      <Spline scene="https://prod.spline.design/HBtOF8WJJ2NlWq5O/scene.splinecode" />
      
      </div>
    </div>
  );
};

export default Landing;
