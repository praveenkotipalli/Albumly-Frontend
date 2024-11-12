import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  return (
    <div style={{marginTop:"40px"}}>
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photo Gallery
        </Typography>

        <Button
          component={Link}
          to={`/album/show?id=${id}`}
          color="inherit"
          variant="contained"
          sx={{ mr: 2, backgroundColor: '#799edc', '&:hover': { backgroundColor: '#2f6ad0' } }}
        >
          View
        </Button>
        <Button
          component={Link}
          to={`/album/upload?id=${id}`}
          color="inherit"
          variant="contained"
          sx={{ mr: 2, backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' } }}
        >
          Upload photos
        </Button>

        <Button
          component={Link}
          to={`/album/delete/id?=${id}`}
          color="inherit"
          variant="contained"
          sx={{ mr: 2, backgroundColor: '#f44336', '&:hover': { backgroundColor: '#d32f2f' } }}
        >
          Delete photos
        </Button>
        {/* <Button component={Link} to={`/album/edit/id?=${id}`} color="inherit">
          Edit photos
        </Button> */}
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Header;
