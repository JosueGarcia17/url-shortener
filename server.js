require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);

})

db.once('open', () => console.log('Database successfully connected'));
app.set('view engine', 'ejs'); 


app.get('/', (req, res) => {
    res.render('index');
})


app.listen(process.env.PORT || 7777);