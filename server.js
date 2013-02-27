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

// Require libs
var express = require('express');

// Define variables
var port = 80;

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
    title: "This is plain HTML rendered with ejs",
	body: "<h1>This is the page body</h1>"
  })
})

app.listen(port);
console.log('Listening on port ' + port);