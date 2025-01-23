const mongoose = require("mongoose");
const savedItemSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productName: String,
  category: String,
  brand: String,
  price: String,
  description: String,
  weight: String,
  expirationDate: Date,
  image: String,
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

const SavedItemModel = mongoose.model("SavedItem", savedItemSchema);
module.exports = SavedItemModel;
