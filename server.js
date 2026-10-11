const express = require('express');
const path = require('path');
require('dotenv').config();
const pool = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// ตั้งค่า View Engine เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// หน้าแรก (Home)
app.get('/', async (req, res) => {
  try {
    // ทดสอบดึงข้อมูลเบื้องต้นจากฐานข้อมูล (ถ้ามีตารางแล้ว)
    res.render('index', { 
      title: 'Cortis Thailand - Fan Hub',
      message: 'ยินดีต้อนรับสู่เว็บไซต์แฟนคลับ Cortis อย่างเป็นทางการในประเทศไทย'
    });
  } catch (err) {
    console.error(err);
    res.send('Database connection error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
