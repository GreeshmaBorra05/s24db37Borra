const mongoose = require("mongoose")
const groceriesSchema = mongoose.Schema({
item_type: String,
item_name: String,
item_price: Number
})

module.exports = mongoose.model("groceries",
groceriesSchema)