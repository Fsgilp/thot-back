const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tests = require("./tutorial.model.js", "./user.model.js")(mongoose);

module.exports = db;
