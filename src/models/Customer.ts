import { RowDataPacket } from "mysql2";

export interface Customer extends RowDataPacket {
  email: string;
  phone?: string;
  fname: string;
  lname: string;
}
