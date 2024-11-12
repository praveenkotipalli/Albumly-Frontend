import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Typography, List, ListItem, ListItemText, IconButton, CircularProgress } from '@mui/material';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import Header from './albums/header';
import { useLocation, useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const navigate = useNavigate(); // Initialize navigate hook

  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false); // Loading state

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'application/pdf': []
    },
    multiple: true
  });

  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleUpload = async () => {
    setIsUploading(true); // Start uploading
    try {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append('files', file);
      });

      const token = localStorage.getItem('token');

      const response = await fetch(`/api/v1/albums/${id}/upload-photos`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      console.log('Upload successful:', response.data);
      setFiles([]); // Clear the files after upload
      navigate(-1); // Redirect to the previous page
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setIsUploading(false); // Reset loading state
    }
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: '50px' }}>
        <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto', textAlign: 'center', padding: 2 }}>
          {/* Drag-and-Drop Area */}
          <Box
            {...getRootProps()}
            sx={{
              border: '2px dashed #3f51b5',
              padding: 3,
              cursor: 'pointer',
              borderRadius: 2,
              backgroundColor: isDragActive ? '#f0f0f0' : '#fafafa',
              transition: 'background-color 0.2s ease-in-out',
              textAlign: 'center'
            }}
          >
            <input {...getInputProps()} />
            <UploadOutlined style={{ fontSize: '2rem', color: '#3f51b5' }} />
            <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
              {isDragActive ? 'Drop the files here...' : 'Drag & drop files here, or click to browse'}
            </Typography>
          </Box>

          {/* File List */}
          <List sx={{ mt: 2 }}>
            {files.map((file) => (
              <ListItem
                key={file.name}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(file.name)}>
                    <DeleteOutlined />
                  </IconButton>
                }
              >
                <ListItemText primary={file.name} secondary={`${(file.size / 1024).toFixed(2)} KB`} />
              </ListItem>
            ))}
          </List>

          {/* Upload Button */}
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleUpload} disabled={files.length === 0 || isUploading}>
            {isUploading ? <CircularProgress size={24} color="inherit" /> : 'Upload Files'}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default FileUpload;
