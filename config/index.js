var config = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return "mongodb://@localhost:27017/node-todo";
    }
    
}