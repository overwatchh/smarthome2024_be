import { Request, Response } from "express";
import {
  createInvoiceService,
  getInvoiceByIdService,
  deleteInvoiceByIdService,
  getInvoicesByPhoneService,
} from "../services/invoiceService";
import {
  CreateInvoicePayload,
  GetInvoiceByIdParam,
  GetInvoicesByPhoneQuery,
} from "../models/Invoice";
export const addInvoice = async (
  req: Request<{}, CreateInvoicePayload>,
  res: Response
) => {
  try {
    const invoiceInfo = req.body;
    await createInvoiceService(invoiceInfo);
    res.status(201).json({
      message: "Invoice created succuessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getInvoiceById = async (
  req: Request<GetInvoiceByIdParam>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const invoiceInfo = await getInvoiceByIdService(id);
    res.status(200).json(invoiceInfo);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      if (err.message === "Invoice not found") {
        res.status(404).json({ message: "Invoice not found" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    } else {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const deleteInvoiceById = async (
  req: Request<GetInvoiceByIdParam>,
  res: Response
) => {
  try {
    const { id } = req.params;
    await deleteInvoiceByIdService(id);
    res.status(200).json({ message: "Invoice deleted" });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      if (err.message === "Invoice not found") {
        res.status(404).json({ message: "Invoice not found" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    } else {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getInvoicesByPhone = async (
  req: Request<{}, {}, {}, GetInvoicesByPhoneQuery>,
  res: Response
) => {
  try {
    const invoicesInfo = await getInvoicesByPhoneService(req.query);
    res.status(200).json(invoicesInfo);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      if (err.message === "No invoices found") {
        res.status(404).json({ message: "No invoices found" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    } else {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
