const express = require("express");
const {
  addTransaction,
  deleteTransaction,
  getAllTransactionByUserId,
  getTransactionByDate,
  createCategory,
  addTransactionToCategory,
} = require("../controllers/transactionController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/addtransaction").post(protect, addTransaction);
router.route("/deletetransaction").put(protect, deleteTransaction);
router.route("/transactionbyid").get(protect, getAllTransactionByUserId);
router.route("/transactionbydate").get(protect, getTransactionByDate);
router.route("/createcategory").post(protect, createCategory);
router
  .route("/createtransactionundercategory")
  .post(protect, addTransactionToCategory);

module.exports = router;
