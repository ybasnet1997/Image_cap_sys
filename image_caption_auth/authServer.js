
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// create connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_auth'
});

// connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
  
  // create table if it doesn't exist
  const sql = "CREATE TABLE IF NOT EXISTS users (firstname VARCHAR(250), lastname VARCHAR(250), email VARCHAR(250) PRIMARY KEY, password VARCHAR(250), current_session BOOLEAN DEFAULT FALSE)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table created or already exists');
  });
});

// use body-parser middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// register API
app.post('/register', (req, res) => {
  console.log('Received request body:', req.body);
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    console.log('Required fields are missing');
    res.status(200).json({ message: 'Required Fields Are Missing' });
  } else {
    const checkEmailSql = "SELECT * FROM users WHERE email = ?";
    const checkEmailValues = [email];
    db.query(checkEmailSql, checkEmailValues, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log('Email already registered');
        res.status(200).json({ message: 'Email Address Already Registered' });
      } else {
        const sql = "INSERT INTO users (firstname, lastname, email, password, current_session) VALUES (?, ?, ?, ?, ?)";
        const values = [firstname, lastname, email, password, true];
        db.query(sql, values, (err, result) => {
          if (err) throw err;
          console.log('User registered');
          const getUserInfoSql = "SELECT firstname, lastname, email FROM users WHERE email = ?";
          const getUserInfoValues = [email];
          db.query(getUserInfoSql, getUserInfoValues, (err, result) => {
            if (err) throw err;
            res.json(result[0]);
          });
        });
      }
    });
  }
});

// login API
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "UPDATE users SET current_session = ? WHERE email = ? AND password = ?";
  const values = [true, email, password];
  db.query(sql, values, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      console.log('Invalid email or password');
      res.status(200).json({ message: 'Invalid Email Address or Password' });
    } else {
      console.log('User logged in');
      const getUserInfoSql = "SELECT firstname, lastname, email FROM users WHERE email = ?";
      const getUserInfoValues = [email];
      db.query(getUserInfoSql, getUserInfoValues, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
      });
    }
  });
});

// isLogged API
app.get('/isLogged', (req, res) => {
  const { email } = req.query;
  const sql = "SELECT current_session FROM users WHERE email = ?";
  const values = [email];
  db.query(sql, values, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      console.log(`User ${email} not found`);
      res.status(200).json({ message: 'User Not Found' });
    } else {
      const currentSession = result[0].current_session;
      console.log(`Current session for user ${email}: ${currentSession}`);
      res.status(200).json({ isLogged: currentSession });
    }
  });
});

// logout API
app.get('/logout', (req, res) => {
  const sql = "UPDATE users SET current_session = ?";
  const values = [false];
  db.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('User logged out');
    res.json({ message: 'User Successfully Logged Out' });
  });
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});