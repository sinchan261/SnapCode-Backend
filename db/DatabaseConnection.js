const MongoConnection = require("../util/mongodb");

const InitDb=()=>{
    MongoConnection();
}
module.exports = InitDb