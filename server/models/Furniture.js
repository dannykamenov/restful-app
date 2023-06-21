const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true, min: 1950, max: 2050 },
    description: { type: String, required: true, maxlength: 50 },
    price: { type: Number, required: true, min: 0, max: 100000 },
    img: { type: String, required: true },
    material: { type: String, required: false },
    _ownerId: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;