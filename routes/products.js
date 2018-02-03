var express = require('express');
var router = express.Router();
var products=require("../controllers/products.controller");

router.route('/list')
    .get(products.list)
router.route('/details')
    .get(products.details)
router.route('/index')
	.get(products.index)
module.exports = router;