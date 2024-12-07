import { RowDataPacket } from "mysql2";
import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Installation extends RowDataPacket {
  customer_phone: Customer["phone"];
  customer_name: Customer["name"];
  product_id: Product["id"];
  created: string;
  booking_date: string;
  install_date?: string;
}

export interface GetInstallationsParam {
  phone: string;
}
