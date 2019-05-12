// dependencies
const path = require('path');

// routing
module.exports = function(app) {
    // GET REQUESTS
    
    app.get('/addItem', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/add.html'));
    });
    
    app.get('/viewAllItems', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/viewAll.html'));
    });

    app.get('/viewSaved', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/saved.html'));
    })
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}