'use strict';

var book = require('../models/bookModel');


module.exports = function (router) {
    router.get('/', function (req, res) {
    book.find({}, function(err, books){
    if(err){
        console.log(err)
    }
    var model = {
        books: books
    }
    res.render('index', model);
    })        
        
    });

};






