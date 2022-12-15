const asyncHandler = require("express-async-handler");
const Transaction = require("../Models/transactionModel");
const User = require("../Models/userModel");

const addTransaction = asyncHandler(async (req, res) => {
  const { trxName, amount, userId } = req.body;
  if (!(trxName && amount && userId)) {
    res.status(400);
    throw new Error("Please Enter All the Feilds");
  }

  let userExist = await User.findOne({ _id: userId });

  if (!userExist) {
    res.status(404);
    throw new Error("User with this id Doesn't Exists");
  }

  let transaction = await Transaction.create({
    trxName: trxName,
    amount: amount,
    userId: userId,
  });

  if (transaction) {
    res.status(201).json({
      _id: transaction._id,
      trxName: transaction.trxName,
      amount: transaction.amount,
      userId: transaction.userId,
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the Transaction");
  }
});

const deleteTransaction = asyncHandler(async (req, res) => {
  const { trxId } = req.body;
});

const getAllTransactionByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("Please enter User ID");
  }

  let userExist = await User.findOne({ _id: userId });

  if (!userExist) {
    res.status(404);
    throw new Error("User with this id Doesn't Exists");
  }

  let allTransactions = await Transaction.find({ userId: userId });
  if (allTransactions.length > 0) {
    res.send(allTransactions);
  } else {
    res.status(404);
    throw new Error("No transaction with this Id Exists");
  }
});

const getTransactionByDate = asyncHandler(async (req, res) => {
  let { startDate, endDate, userId } = req.body;

  if (!(userId && startDate && endDate)) {
    res.status(400);
    throw new Error("Please Enter All the Feilds");
  }

  let transactionByDate = await Transaction.find({
    userId: userId,
    $and: [
      { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } },
    ],
  });

  if (transactionByDate.length > 0) {
    res.send(transactionByDate);
  } else {
    res.status(404);
    throw new Error("No transaction with this Id Exists");
  }
});

module.exports = {
  addTransaction,
  deleteTransaction,
  getAllTransactionByUserId,
  getTransactionByDate,
};
