const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
