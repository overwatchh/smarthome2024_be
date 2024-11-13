import { RowDataPacket } from "mysql2";
import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Installation extends RowDataPacket {
  customer_email: Customer["email"];
  product_id: Product["id"];
  created: string;
  booking_date: string;
  install_date?: string;
}

export interface GetInstallationsParam {
  email: string;
}
