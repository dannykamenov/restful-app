const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const {auth} = require('./middlewares/authMiddleware');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/furnitures')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
}); */

app.use(auth);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(routes)
app.listen(3030, () => {console.log('RESTFUL server is running on port 3030')});