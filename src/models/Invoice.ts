import { RowDataPacket } from "mysql2";
import { Product } from "./Product";

export interface InvoiceProduct extends Product {
  quantity: number;
}

export interface InvoiceInfo {
  id: number;
  created: string;
  products: InvoiceProduct[];
}

export interface InvoiceRecord extends RowDataPacket {
  id: number;
  created: string;
}

export interface ProductPayload {
  id: number;
  quantity: number;
}
export interface CreateInvoicePayload {
  customer_phone: string;
  products: ProductPayload[]
}

export interface GetInvoiceByIdParam {
  id:number;
}

export interface GetInvoicesByPhoneQuery {
  phone:string;
}