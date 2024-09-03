// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { name, password, age } = req.body;

  // Hardcoded credentials
  const validName = 'user';
  const validPassword = 'password';

  if (name === validName && password === validPassword) {
    res.json({ name, age });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
