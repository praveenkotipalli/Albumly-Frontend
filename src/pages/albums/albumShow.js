import React from 'react';
import Header from './albums/header';
import PhotoGrid from './albums/photoGrid';

// const photoUrls = () => [
//   { id: 1, url: 'https://i.pinimg.com/564x/bc/56/4d/bc564d5d459807be330c76c912d4c61f.jpg', title: 'Photo 1' },
//   { id: 2, url: 'https://i.pinimg.com/564x/c9/c0/d9/c9c0d907f13859cc76073fa794dc2ded.jpg', title: 'Photo 2' },
//   { id: 3, url: 'https://i.pinimg.com/564x/96/1f/31/961f3107cd44fa83d73172dd5a103d8d.jpg', title: 'Photo 3' },
//   { id: 4, url: 'https://i.pinimg.com/564x/00/18/04/0018042e00b75350644f9bac7ef320fa.jpg', title: 'Photo 4' },
//   { id: 5, url: 'https://i.pinimg.com/564x/86/23/41/862341691babfd0a7c54bd67dfb64aa7.jpg', title: 'Photo 5' },
//   { id: 6, url: 'https://i.pinimg.com/564x/25/f7/1f/25f71f9c31eb54b4ad011619b88c2b9d.jpg', title: 'Photo 6' },
//   { id: 7, url: 'https://i.pinimg.com/736x/ba/36/6b/ba366bfed4d4c6aba5e3d5eed2522a0f.jpg', title: 'Photo 7' },
//   { id: 8, url: 'https://i.pinimg.com/564x/25/12/ae/2512aed217e85bd84992ce0958cad5a1.jpg', title: 'Photo 8' },
//   { id: 9, url: 'https://i.pinimg.com/564x/0f/8f/c7/0f8fc7cd84dd73bf3b04a4833273a854.jpg', title: 'Photo 9' },
//   { id: 10, url: 'https://i.pinimg.com/564x/93/86/59/938659058269c1ece2b093306032c299.jpg', title: 'Photo 10' }
// ];

const Albums = () => {
  return (
    <div>
      <div style={{ marginTop: '0px' }}>
        <Header />
      </div>
      <div style={{ marginTop: '10px', padding: '3px' }}>
        <PhotoGrid />
      </div>
    </div>
  );
};

export default Albums;
