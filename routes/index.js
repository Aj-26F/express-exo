var express = require('express');
var router = express.Router();
// Define the middleware function
const availabilityMiddleware = (req, res, next) => {
  // Get the current date and time
  const now = new Date();

  // Get the current day of the week
  const day = now.getDay();

  // Get the current hour
  const hour = now.getHours();

  // Check if the day is Monday to Friday (0 to 4) and the hour is from 9 to 17
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    // Show a message that the web application is only available during working hours
    res.send("Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).");
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/accueil',availabilityMiddleware, function(req, res, next) {
  res.render('accueil', { title: 'Express' });
});
/* GET home page. */
router.get('/services',availabilityMiddleware, function(req, res, next) {
  res.render('services', { title: 'Express' });
});
/* GET home page. */
router.get('/contact',availabilityMiddleware, function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
