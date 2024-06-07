// import React from 'react';

// const HomeAppliances = () => {
//   return (
//     <div>
//       <h1>HomeAppliances Page</h1>
//       <p>Here are the HomeAppliances...</p>
//     </div>
//   );
// };

// export default HomeAppliances;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeAppliances = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setImages(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <h1>Home Appliances Page</h1>
      <p>Here are the Home Appliances...</p>
      <div style={gridStyle}>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`Home Appliance ${index + 1}`} style={imageStyle} />
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '10px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

export default HomeAppliances;
