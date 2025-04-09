require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const contactRoutes = require('./routes/contactRoutes');
const subscribeRoutes = require('./routes/subscribeRoutes'); // 👈 NEW

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscribeRoutes); // 👈 NEW

app.get('/', (req, res) => res.send("API is running"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
