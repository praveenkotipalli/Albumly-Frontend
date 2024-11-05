// material-ui
import { Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// project import
import MainCard from 'components/MainCard';

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
    <MainCard title="Landing Card">
      <Typography variant="body2">
        Landing page
      </Typography>
    </MainCard>
  );
};

export default Landing;
