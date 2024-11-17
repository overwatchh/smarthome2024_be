import express from "express";
import {
  addInvoice,
  getInvoiceById,
  deleteInvoiceById,
  getInvoicesByEmail,
} from "../controllers/invoiceController";

const router = express.Router();

router.put("/invoice", addInvoice);
router.get("/invoices", getInvoicesByEmail);
router.get("/invoice/:id", getInvoiceById);
router.delete("/invoice/:id", deleteInvoiceById);
export default router;
