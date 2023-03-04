/*
File Name   : index.js
Name        : Christy Jose
Student Id  : 301244185
Date        : 04-Mar-2023
App name    : COMP229-F2020-MidTerm-301244185
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let books = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Favourite Books Arena',
    books: ''
   });
});

module.exports = router;
