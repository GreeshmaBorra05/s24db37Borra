var groceries = require('../models/groceries');

exports.groceries_list = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries list');
};
// for a specific groceries.
exports.groceries_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries detail: ' + req.params.id);
};
// Handle groceries create on POST.
exports.groceries_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries create POST');
};
// Handle groceries delete from on DELETE.
exports.groceries_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries delete DELETE ' + req.params.id);
};
// Handle groceries update form on PUT.
exports.groceries_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries update PUT' + req.params.id);
};



// List of all groceries
exports.groceries_list = async function (req, res) {
    try {
        thegroceries = await groceries.find();
        res.send(thegroceries);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.groceries_view_all_Page = async function (req, res) {
    try {
        thegroceries = await groceries.find();
        res.render('groceries', { title: 'Groceries Search Results', results: thegroceries });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle   Groceries create on POST.
exports.groceries_create_post = async function(req, res) {
    console.log(req.body)
    let document = new groceries();
    
    document.item_type = req.body.item_type;
    document.item_name = req.body.item_name;
    document.item_price = req.body.item_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

