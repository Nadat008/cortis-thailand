const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ตั้งค่า View Engine เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ตั้งค่า Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes เบื้องต้น
app.get('/', (req, res) => {
  res.render('index', { title: 'Cortis Thailand - Fan Hub' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
