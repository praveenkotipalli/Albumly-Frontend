// import { errors } from '../../../../../../../AppData/Local/Microsoft/TypeScript/5.5/node_modules/undici-types/index';
import { useState, useEffect } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { fetchPostData } from 'client/client';
import { useNavigate } from 'react-router-dom';

const AuthRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    return password.length > 6;
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      navigate('/');
    }
  }, []);

  const handleLogin = async () => {
    setErrors({ email: '', password: '' });

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      return;
    }
    if (!validatePassword(password)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters' }));
      return;
    }
    fetchPostData('/auth/users/add', { email, password })
      .then(() => {
        // const { token } = response.data;
        setLoginError('');
        // window.location.href = '/';
        navigate('/login');
      })
      .catch((err) => {
        console.error('Login error:', err);
        setLoginError('An error occurred. Please try again.');
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        // heplerText={errors.email}
      />
      <p style={{ color: 'red', fontSize: '13px' }}>{errors.email}</p>

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        // heplerText={errors.password}
      />
      <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>

      <Button variant="contained" color="primary" onClick={handleLogin}>
        Sign Up
      </Button>
      {loginError && <p style={{ color: 'red', fontSize: '13px' }}>{loginError}</p>}
    </Container>
  );
};

export default AuthRegister;
