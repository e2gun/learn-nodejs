const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }))

app.get('/', (req,res) => res.send('API running'));

app.use('/api/customer',require('./routes/api/customer'));
app.use('/api/vehicle' ,require('./routes/api/vehicle'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start ${PORT}`));