const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    trxName: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, trim: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
