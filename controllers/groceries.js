var groceries = require('../models/groceries');

exports.groceries_list = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries list');
};
// for a specific groceries..
exports.groceries_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await groceries.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
}
// Handle groceries create on POST.
exports.groceries_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries create POST');
};
// Handle groceries delete from on DELETE.
exports.groceries_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: groceries delete DELETE ' + req.params.id);
};
// Handle groceries update form on PUT.
exports.groceries_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await groceries.findById( req.params.id)
// Do updates of properties
if(req.body.groceries_type)
toUpdate.groceries_type = req.body.groceries_type;
if(req.body.groceries_name) toUpdate.cost = req.body.groceries_name;
if(req.body.groceries_price) toUpdate.size = req.body.groceries_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
}



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
    

