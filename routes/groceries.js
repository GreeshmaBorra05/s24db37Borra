var express = require('express');
const groceries_controllers= require('../controllers/groceries');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET Groceries */
router.get('/', groceries_controllers.groceries_view_all_Page );
/* GET create costume page */
router.get('/create', secured, groceries_controllers.groceries_create_Page)
/* GET create update page */
router.get('/update', secured, groceries_controllers.groceries_update_Page);
/* GET delete costume page */
router.get('/delete', secured, groceries_controllers.groceries_delete_Page);
/* GET detail costume page */
router.get('/detail', groceries_controllers.groceries_view_one_Page);
module.exports = router;
