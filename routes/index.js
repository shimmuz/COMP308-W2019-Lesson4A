let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/contcat', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/favourite', function(req, res, next) {
  res.render('index', { title: 'Favourite' });
});



module.exports = router;
