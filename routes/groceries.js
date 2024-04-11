var express = require('express');
const groceries_controllers= require('../controllers/groceries');
var router = express.Router();
/* GET Groceries */
router.get('/', groceries_controllers.groceries_view_all_Page );
/* GET create costume page */
router.get('/create', groceries_controllers.groceries_create_Page)
/* GET create update page */
router.get('/update', groceries_controllers.groceries_update_Page);
/* GET delete costume page */
router.get('/delete', groceries_controllers.groceries_delete_Page);
/* GET detail costume page */
router.get('/detail', groceries_controllers.groceries_view_one_Page);
module.exports = router;
