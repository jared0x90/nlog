/******************************************************************************

Nlog
A node.js blog

Copyright (C) 2013 Jared De Blander
jared0x90@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

******************************************************************************/

// Prepare graceful exit
process.on('SIGINT', function() {
  console.log("\n\nGracefully shutting down from  SIGINT (Crtl-C).\n\nThanks for trying NLog,\nJared De Blander <jared0x90@gmail.com>\n");
  // some other closing procedures go here
  process.exit();
})

// Require libs
var express = require('express');

// Define variables
var port = process.env.PORT;

// Start Express
var app = express();

app.configure(function(){
  // ... 
  app.set('views', __dirname + '/views');
  // app.set('view engine', 'ejs');
  app.engine('html', require('ejs').renderFile);
  // ...
});

app.get("/", function(req, res) {
  res.render("index.html", {
    title: "Jared's Nlog",
	body: "<h1>Jared's Nlog</h1><h2>An experimental blog written in Node.js</h2>"
  })
})

app.listen(port);
console.log('Listening on port ' + port);