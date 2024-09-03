// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const LoginForm = ({ onSubmit }: { onSubmit: (name: string, age: number) => void }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleSubmit = () => {
    const age = calculateAge(dob);
    if (age < 18 || age > 50) {
      setError('Age must be between 18 and 50.');
      return;
    }
    setError('');
    onSubmit(name, age);
  };

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <Typography variant="h5">Login</Typography>
      </Grid>
      <Grid item>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Date of Birth"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      {error && (
        <Grid item>
          <Typography color="error">{error}</Typography>
        </Grid>
      )}
      <Grid item>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
