const mongoose = require("mongoose")
const groceriesSchema = mongoose.Schema({
    item_type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure length of vehicle between 3 and 30
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    item_name: String,
    item_price: Number
})

module.exports = mongoose.model("groceries", groceriesSchema)