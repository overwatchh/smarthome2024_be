import pool from "../config/db";
import { Customer } from "../models/Customer";
import {
  CreateInvoicePayload,
  InvoiceRecord,
  InvoiceProduct,
  InvoiceInfo,
  GetInvoicesByEmailQuery,
} from "../models/Invoice";

export const createInvoiceService = async (
  payload: CreateInvoicePayload
): Promise<void> => {
  try {
    const { customer_email, products } = payload;
    const [customerRows] = await pool.query<Customer[]>(
      "SELECT * FROM customer WHERE email = ?",
      [customer_email]
    );

    if (customerRows.length === 0) {
      throw new Error("Customer not found");
    }

    const [invoiceResult] = await pool.query(
      "INSERT INTO invoice (created, email) VALUES (NOW(), ?)",
      [customer_email]
    );

    const invoiceId = (invoiceResult as any).insertId;

    const invoiceProducts = products.map((product) => [
      Number(invoiceId),
      product.id,
      product.quantity,
    ]);

    await pool.query(
      "INSERT INTO invoice_product (invoice_id, product_id, quantity) VALUES ?",
      [invoiceProducts]
    );
  } catch (error) {
    throw error;
  }
};

export const getInvoiceByIdService = async (
  id: number
): Promise<InvoiceInfo> => {
  try {
    const [invoiceRows] = await pool.query<InvoiceRecord[]>(
      "SELECT * FROM invoice WHERE id = ?",
      [id]
    );

    if (invoiceRows.length === 0) {
      throw new Error("Invoice not found");
    }

    const [products] = await pool.query<InvoiceProduct[]>(
      "SELECT p.id, p.name, p.price, ip.quantity FROM product p JOIN invoice_product ip ON p.id = ip.product_id WHERE ip.invoice_id = ?",
      [id]
    );

    const invoiceInfo: InvoiceInfo = {
      id: invoiceRows[0].id,
      created: invoiceRows[0].created,
      products: products,
    };

    return invoiceInfo;
  } catch (error) {
    throw error;
  }
};

export const deleteInvoiceByIdService = async (id: number): Promise<void> => {
  try {
    await pool.query("DELETE FROM invoice_product WHERE invoice_id = ?", [id]);
    const [result] = await pool.query("DELETE FROM invoice WHERE id = ?", [id]);

    if ((result as any).affectedRows === 0) {
      throw new Error("Invoice not found");
    }
  } catch (error) {
    throw error;
  }
};

export const getInvoicesByEmailService = async (
  query: GetInvoicesByEmailQuery
): Promise<InvoiceInfo[]> => {
  const { email } = query;
  try {
    // Get all invoices for the provided email
    const [invoices] = await pool.query<InvoiceRecord[]>(
      "SELECT * FROM invoice WHERE email = ?",
      [email]
    );

    if (invoices.length === 0) {
      throw new Error("No invoices found");
    }

    // Map through invoices to get products for each one
    const detailedInvoices: InvoiceInfo[] = await Promise.all(
      invoices.map(async (invoice) => {
        const [products] = await pool.query<InvoiceProduct[]>(
          "SELECT p.id, p.name, p.price, ip.quantity FROM product p JOIN invoice_product ip ON p.id = ip.product_id WHERE ip.invoice_id = ?",
          [invoice.id]
        );

        const invoiceInfo: InvoiceInfo = {
          id: invoice.id,
          created: invoice.created,
          products: products,
        };

        return invoiceInfo;
      })
    );

    return detailedInvoices;
  } catch (error) {
    throw error;
  }
};
