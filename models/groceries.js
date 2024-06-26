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
    item_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_ ]+$/.test(v); // Ensure length of vehicle between 3 and 30
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    item_price: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid price! Price must be a non-negative number.`,
        },
    },
})

module.exports = mongoose.model("groceries", groceriesSchema)