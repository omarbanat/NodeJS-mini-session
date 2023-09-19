const express = require('express');
const app = express();
const { addUser, deleteUser } = require('./controllers/userController');
const connectDB = require('./db/db');
const bodyParser = require('body-parser');
const PORT = 8000;

app.use(bodyParser.json());

app.post('/insert', addUser);
app.delete('/delete', deleteUser);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is runiing on http://localhost:${PORT}`);
});
