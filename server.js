// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost/login-signup', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Use body-parser middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Set up EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Define Mongoose schema and model for user data
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);


// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // // Handle login request
//   app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const user = await User.findOne({ username });
//       if (!user || user.password !== password) {
//         return res.status(401).json({ error: 'Invalid username or password' });
//       }
//       res.redirect('/index');
//     } catch (err) {
//       res.status(500).json({ error: 'Error logging in' });
//     }  
//   });


// // Handle signup request
// app.post('/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Username or email already registered' });
//       res.redirect('index');
//     }

//     const newUser = new User({ username, email, password });
//     await newUser.save();
//     res.status(201).json({ message: 'Signup successful' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error signing up' });
//   }
// });

// // Serve the index.ejs file
// app.get('/', (req, res) => {
//   res.render('index', { message: 'Welcome to the login/signup page!' });
// });

// app.get('/login', (req, res) => {
//     res.render('login', { message: 'Welcome to the login/signup page!' });
//   });

//   app.get('/sign', (req, res) => {
//     res.render('signup', { message: 'Welcome to the login/signup page!' });
//   });

//    app.get('/faq', (req, res) => {
//      res.render("FAQ", { message: 'Welcome to the login/signup page!' });
//    });

//  app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
//  });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/login-signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define Mongoose schema and model for user data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle login request
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.redirect('/index');
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }  
});

// Handle signup request
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already registered' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    // Redirect to the homepage after successful signup
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: 'Error signing up' });
  }
});


// Serve the index.ejs file
app.get('/', (req, res) => {
  res.render('index', { message: 'Welcome to the login/signup page!' });
});

app.get('/login', (req, res) => {
    res.render('login', { message: 'Welcome to the login/signup page!' });
});

app.get('/signup', (req, res) => {
    res.render('signup', { message: 'Welcome to the login/signup page!' });
});

app.get('/faq', (req, res) => {
    res.render("FAQ", { message: 'Welcome to the login/signup page!' });
});

app.get('/index', (req, res) => {
    res.render('index', { message: 'Welcome to the index page!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
