import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGetDataWithAuth } from 'client/client';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import cover from '../../assets/allu arjun.jpg';

const AlbumPage = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      fetchGetDataWithAuth('/albums/')
        .then((data) => {
          setAlbums(data); // Set the albums directly from the data
        })
        .catch((error) => {
          setError('Your token may got expired, please logout and login again'); // Set error message
          console.log('Error fetching albums:', error);
          setAlbums([]); // Clear the albums array
        });
    }
  }, [navigate]);

  return (
    <div style={{ marginTop: '70px' }}>
      {error ? (
        <h1>{error}</h1>
      ) : albums.length <= 0 ? (
        <h1>No albums are there, please add some</h1>
      ) : (
        <Grid container spacing={3}>
          {albums.map((album, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <div>
                <Card sx={{ maxWidth: 345, backgroundColor: '#252525d7' }}>
                  <CardMedia component="img" height="140" image={cover} alt="Album Thumbnail" />
                  <CardContent>
                    <CardActions>
                      <Button size="small">
                        <Link to={`/album/show?id=${album.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <h2>{album.name}</h2>
                        </Link>
                      </Button>
                    </CardActions>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {album.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AlbumPage;
