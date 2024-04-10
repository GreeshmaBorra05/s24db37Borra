var express = require('express');
const groceries_controllers= require('../controllers/groceries');
var router = express.Router();
/* GET Groceries */
router.get('/', groceries_controllers.groceries_view_all_Page );

/* GET detail costume page */
router.get('/detail', groceries_controllers.groceries_view_one_Page);
module.exports = router;