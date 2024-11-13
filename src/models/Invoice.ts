import { RowDataPacket } from "mysql2";
import { Product } from "./Product";

export interface InvoiceProduct extends Product {
  quantity: number;
}

export interface Invoice extends RowDataPacket {
  id: number;
  created: string;
  products: InvoiceProduct[];
}
