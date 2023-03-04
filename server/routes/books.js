/*
File Name   : books.js
Name        : Christy Jose
Student Id  : 301244185
Date        : 04-Mar-2023
App name    : COMP229-F2020-MidTerm-301244185
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

let bookController = require('../controllers/books');

/* GET books List page. READ */
router.get('/book-list', bookController.displayBookList);

//  GET the Book Details page in order to add a new Book
router.get('/add', bookController.displayAddPage);

// POST process the Book Details page and create a new Book - CREATE

router.post('/add', bookController.processAddPage);


// GET the Book Details page in order to edit an existing Book

router.get('/:id', bookController.displayEditPage);


// POST - process the information passed from the details form and update the document

router.post('/:id', bookController.processEditPage);



// GET - process the delete by user id

router.get('/delete/:id', bookController.performDelete);



module.exports = router;
