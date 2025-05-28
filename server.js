const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const USERS_FILE = './users.json';

// Register
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  let users = [];

  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  }

  if (users.find(user => user.username === username)) {
    return res.json({ success: false, message: 'Username already exists' });
  }

  users.push({ username, password });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ success: true, message: 'Registered successfully' });
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!fs.existsSync(USERS_FILE)) return res.json({ success: false, message: 'User not found' });

  const users = JSON.parse(fs.readFileSync(USERS_FILE));
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
