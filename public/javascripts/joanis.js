// Get the current date and time
var now = new Date();

// Get the current day of the week
var day = now.getDay();

// Get the current hour
var hour = now.getHours();

// Check if the day is Monday to Friday (0 to 4) and the hour is from 9 to 17
if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
  // Show the web application
  document.body.style.display = "block";
} else {
  // Show a message that the web application is only available during working hours
  document.body.innerHTML = "<h1>Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).</h1>";
}