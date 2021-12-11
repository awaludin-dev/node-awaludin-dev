const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
})

router.get('/predict', (req, res) => {
    res.render('predict.ejs');
})

router.get('/news-api', (req, res) => {
    res.render('newsApi.ejs');
})

router.use(function(req,res) {
    res.status(404);
    res.render('404.ejs');
})

module.exports = router;