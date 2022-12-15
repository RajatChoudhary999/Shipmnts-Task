const express = require("express");
const {
  addTransaction,
  deleteTransaction,
  getAllTransactionByUserId,
  getTransactionByDate,
} = require("../controllers/transactionController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/addtransaction").post(protect, addTransaction);
router.route("/deletetransaction").put(protect, deleteTransaction);
router.route("/transactionbyid").get(protect, getAllTransactionByUserId);
router.route("/transactionbydate").get(protect, getTransactionByDate);

module.exports = router;
