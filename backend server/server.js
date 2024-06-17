const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: '87fir87r8f', resave: true, saveUninitialized: true }));

app.use(express.json());

app.get('', (req, res) => {
  res.send(`
      <a href="/register">Register</a><br>
      <a href="/login">Log In</a><br>
      <a href="/dashboard">Dashboard</a>
    `)
})

app.get('/register', (req, res) => {
  res.send(`
    <form method="POST" action="/register">
      <label for="username">Email:</label>
      <input type="text" id="email" name="email"><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br>
      <input type="submit" value="Register">
    </form>
  `);
});

app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <label for="username">Email:</label>
      <input type="text" id="email" name="email"><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br>
      <input type="submit" value="Login">
    </form>
  `);
});

// Sample in-memory database for storing users
const users = [];

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Check if the email is already registered
  if (users.find(user => user.email === email)) {
    return  res.json({ error: "the email is already registered" });
  }

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the user in the in-memory database (you might want to use a database in a real-world application)
  users.push({ email, password: hashedPassword });
  console.log(users)
  res.redirect('http://localhost:3000/');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find(user => user.email === email);

  // Check if the user exists
  if (!user) {
    console.log("User doesn't exist")
    return res.status(401).send('Invalid email or password');
  }

  // Compare the provided password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    // Set a session variable to indicate that the user is authenticated
    req.session.authenticated = true;
    res.redirect('Dashboard');
  } else {
    console.log("User password doesn't match")
    res.status(401).send('Invalid email or password');
  }
});

// Middleware to protect routes that require authentication
const requireAuth = (req, res, next) => {
  console.log(req.session)
  if (req.session.authenticated) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Example of a protected route
app.get('/dashboard', requireAuth, (req, res) => {
  res.send('Welcome to the dashboard!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});