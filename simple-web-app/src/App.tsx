// src/App.tsx
import React from 'react';
import LoginForm from './components/login';

const App = () => {
  const handleLogin = async (name: string, age: number) => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, password: 'hardcoded_password' }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Welcome ${data.name}, Age: ${data.age}`);
    } else {
      alert('Authentication failed');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default App;
