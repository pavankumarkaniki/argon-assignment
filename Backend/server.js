// server.js
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

app.use(
  cors({
    origin: 'http://localhost:5000',
  }),
)

app.use(bodyParser.json())

const db = new sqlite3.Database('./servicepro.db', err => {
  if (err) {
    console.error('Error opening database:', err)
  } else {
    console.log('Connected to SQLite database.')
  }
})

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS technicians (
        technician_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        photo TEXT,
        specialization TEXT,
        rating REAL,
        description TEXT
    )`)

  db.run(`CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
    )`)

  db.run(`CREATE TABLE IF NOT EXISTS appliance_types (
        appliance_id INTEGER PRIMARY KEY AUTOINCREMENT,
        type_name TEXT
    )`)
})

app.get('/locations', (req, res) => {
  const locations = ['Pune', 'Andhra Pradesh', 'Telangana']
  res.json(locations)
})

app.get('/appliances', (req, res) => {
  db.all('SELECT * FROM appliance_types', [], (err, rows) => {
    if (err) {
      res.status(500).json({error: err.message})
    } else {
      res.json(rows)
    }
  })
})

app.get('/featured-technicians', (req, res) => {
  db.all(
    'SELECT * FROM technicians ORDER BY rating DESC LIMIT 5',
    [],
    (err, rows) => {
      if (err) {
        res.status(500).json({error: err.message})
      } else {
        res.json(rows)
      }
    },
  )
})

app.post('/login', (req, res) => {
  const {email, password} = req.body
  db.get(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, row) => {
      if (err) {
        res.status(500).json({error: err.message})
      } else if (row) {
        res.json({message: 'Login successful', user: row})
      } else {
        res.status(401).json({error: 'Invalid credentials'})
      }
    },
  )
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
