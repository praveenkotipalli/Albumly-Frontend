import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '../../../../node_modules/@mui/material/index';
import { useLocation } from '../../../../node_modules/react-router-dom/dist/index';
import { fetchGetDataWithAuth, fetchGetDataWithAuthArrayBuffer } from '../../../client/client';

import { Buffer } from 'buffer';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState({}); // Initialize as empty object
  const [loading, setLoading] = useState(true); // Add loading state
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const album_id = queryParams.get('id');

  useEffect(() => {
    // Fetch album data
    fetchGetDataWithAuth('/albums/' + album_id)
      .then((res) => {
        console.log('Album Response:', res); // Log response for debugging

        if (res && Array.isArray(res) && res.length > 0 && res[0].photos && Array.isArray(res[0].photos)) {
          const photoList = res[0].photos;
          let tempPhotos = {};

          // Fetch images for each photo
          photoList.forEach((photo) => {
            fetchGetDataWithAuthArrayBuffer(photo.download_link)
              .then((response) => {
                const albumPhotoID = 'album_' + album_id + '_photo+' + photo.id;
                const buffer = Buffer.from(response, 'binary').toString('base64');

                tempPhotos[albumPhotoID] = {
                  album_id: album_id,
                  photo_id: photo.id,
                  name: photo.name,
                  description: photo.description,
                  content: buffer
                };

                // After updating the tempPhotos, set it to state
                setPhotos((prevPhotos) => ({ ...prevPhotos, [albumPhotoID]: tempPhotos[albumPhotoID] }));
              })
              .catch((error) => {
                console.error('Error fetching photo data:', error);
              });
          });
        } else {
          console.error('No photos found in response');
          setPhotos({}); // Set photos to empty if no valid data found
        }
      })
      .catch((error) => {
        console.error('Error fetching album:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching is done
      });
  }, [album_id]);

  // Render loading state if still fetching
  if (loading) {
    return (
      <Typography variant="h6" align="center">
        Loading photos...
      </Typography>
    );
  }

  return (
    <div>
      {Object.keys(photos).length <= 0 ?
      <h1>No photos found, please add some</h1>
    :
    <Grid container spacing={2}>
      {Object.keys(photos).map((key) => (
        <Grid item key={key} xs={12} sm={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image={'data:image/jpeg;base64,' + photos[key]['content']}
              alt={photos[key]['name']}
              height="400"
              width="100%"
            />
            <CardContent>
              <Typography variant="subtitle1" component="div" align="center">
                {photos[key]['name']}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>}
    </div>
  );
};

export default PhotoGrid;
