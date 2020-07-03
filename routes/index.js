const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index-controller');


/* GET single id data with complete data from json-file. */
router.get('/:id', indexController.getGenreListItemById );

/* GET root data with id, name, short-description and decade. */
router.get('/', indexController.getGenreList );

module.exports = router;
