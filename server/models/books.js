/*
File Name   : books.js
Name        : Christy Jose
Student Id  : 301244185
Date        : 04-Mar-2023
App name    : COMP229-F2020-MidTerm-301244185
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
