// dependencies
const express = require('express');

// initialize an express server
const app = express();

// set the port
const PORT = process.env.PORT || 3000;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// set up the route files
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// start the server
app.listen(PORT, function() {
    console.log('Server started. Visit => localhost:'+PORT);
});