'use scrict'

var mongoose = require('mongoose');
var db = function(){
    return {
        config: function(conf){
            mongoose.connect("mongodb://localhost/softwarebooks");
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'COnnection Error'));
            db.once('open', function(){
                console.log('DB Connection Open ...');
            })
        }
    }
}

module.exports = db();