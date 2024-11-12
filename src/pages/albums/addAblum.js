import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { fetchPostDataWithAuth } from 'client/client';
import { TextField } from '../../../node_modules/@mui/material/index';
import { Button } from '../../../node_modules/@mui/material/index';
import { useEffect, useState } from 'react';
// import { CoolMode } from "components/magic ui/CoolButton";
import Robo from 'components/spline/Robo';
const AddAlbumForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
      window.location.reload();
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { name: '', description: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const payload = {
        name: formData.name,
        description: formData.description
      };

      fetchPostDataWithAuth('/albums/add', payload)
        .then((response) => {
          console.log('Album added:', response);
        })
        .catch((error) => {
          console.error('Album adding Error:', error);
        });
      navigate('/album-page');
      console.log('Form Submitted:', payload);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#f0f4f8' // Optional background for contrast
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '98px',
          // right: "1px",
          left: '750px',
          zIndex: 1 // Keeps Robo on top
        }}
      >
        <Robo />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          gap: '1.5rem'
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
        />

        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          error={!!errors.description}
          helperText={errors.description}
          margin="normal"
          name="description"
          onChange={handleInputChange}
          value={formData.description}
          multiline
          rows={4}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddAlbumForm;
