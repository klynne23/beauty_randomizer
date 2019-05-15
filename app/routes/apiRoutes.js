// require the data
// let categories = require('../code/categories');
let categories = require('../code/data');
let savedLooks = require('../code/savedLooks');

// routes
module.exports = function(app) {
    // GET REQUESTS //
    
    // get request for all of the makeup categories and items
    app.get('/api/makeup', (req, res) => {
        res.json(categories);
    });

    // get request for all of the saved looks
    app.get('/api/savedLooks', (req, res) => {
        res.json(savedLooks); 
    })

    app.get('/api/viewcategories', (req, res) => {
        res.json(categories);
    })

    app.get('/api/viewsaved', (req, res) => {
        res.json(savedLooks);
    })

    // POST REQUESTS //

    app.post('/api/addCategory', (req, res) => {
        let newCategory = {
            category: req.body.category,
            items: []
        }
        categories.push(newCategory);
        res.json(categories);
    })

    // post request for adding a new makeup item
    app.post('/api/newItem', (req, res) => {
        // console.log(req.body);
        categories.forEach(category => {
            if (category.category === req.body.category) {
                category.items.push(req.body);
            }
        });
        res.json(categories);
    });

    app.post('/api/addImage', (req, res) => {
        // console.log(req.body);
        
        savedLooks.forEach(look => {
            if(look.id === req.body.id) {
                console.log(req.body);
                console.log(look.id, look.image);
                look.image = req.body.image;
                let updatedLook = look;
                console.log(updatedLook.image);
                res.send(updatedLook);
            }
        })
    })

    // post request for adding a new saved look
    app.post('/api/saveLook', (req, res) => {
        // console.log(req.body.look);
        savedLooks.push(req.body);
        res.json(req.body);
    })

    app.post('/api/deleteItem', (req, res) => {
        // console.log(req.body);
        categories.forEach(category => {
            if (req.body.category === category.category) {
                category.items = category.items.filter( item => item.id != req.body.id );
            }
        })
        res.json(categories);
    })

    app.post('/api/deleteLook', (req, res) => {
        // console.log(req.body);
        savedLooks = savedLooks.filter(look => look.id != req.body.id)
        res.json(savedLooks);
    })
}