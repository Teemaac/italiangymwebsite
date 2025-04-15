const express = require('express');
const fs = require('fs');
const router = express.Router();
const DB_FILE = './database.json';

function readDB() {
  const data = fs.readFileSync(DB_FILE, 'utf8');
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Signup route
router.post('/signup', (req, res) => {
  const db = readDB();
  db.members.push(req.body);
  writeDB(db);
  res.json({ message: 'Signup successful!' });
});

// Schedule route
router.post('/schedule', (req, res) => {
  const db = readDB();
  db.appointments.push(req.body);
  writeDB(db);
  res.json({ message: 'Appointment scheduled successfully!' });
});

module.exports = router;
