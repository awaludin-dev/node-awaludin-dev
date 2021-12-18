const express = require('express');
const routerSeq = require('./app/routes');
const app = express();
const router = require('./routes');
const cors = require('cors');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);
app.use(cors());
app.use(routerSeq);
app.use(function(req,res) {
    res.status(404);
    res.render('404.ejs');
})

app.listen(3000, () => console.log('App berjalan pada server http://localhost:3000'));