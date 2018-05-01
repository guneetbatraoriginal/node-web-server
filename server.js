const express = require('express');
const hbs = require('hbs');

var server = express();

hbs.registerPartials(__dirname + '/views/partials');

// Helper without arguments
hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear();
});

// Helper with arguments
hbs.registerHelper('shoutOut', (text) => {
  return text.toUpperCase();
});

server.set('view engine', 'hbs');

// server.use((req,res,next) => {
//   res.render('maintenance.hbs');
// });

server.use(express.static(__dirname + '/public'));
server.get("/", (req,res) => {
  res.render('home.hbs');
});

server.get("/about", (req,res) => {
  res.render('About.hbs');
});
server.listen(3000,() => console.log('Server started on port 3000'));
