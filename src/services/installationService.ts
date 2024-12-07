import pool from "../config/db";
import { Customer } from "../models/Customer";
import { GetInstallationsParam, Installation } from "../models/Installation";

export const getInstallations = async (
  param: GetInstallationsParam
): Promise<Installation[]> => {
  try {
    const query = `SELECT * FROM installation WHERE phone = ${param.phone}`;
    const [rows] = await pool.query<Installation[]>(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

export const createInstallation = async (
  payload: Installation
): Promise<void> => {
  // create customer if not exists
  const [customerRows] = await pool.query<Customer[]>(
    "SELECT * FROM customer WHERE phone = ?",
    [payload.customer_phone]
  );

  if (customerRows.length === 0) {
    const customerQuery = "INSERT INTO customer(phone, name) VALUES(?, ?)";
    await pool.query(customerQuery, [
      payload.customer_phone,
      payload.customer_name,
    ]);
  }
  // create installation
  const query =
    "INSERT INTO installation(phone,product_id, booking_date) VALUES(?, ?, ?)";
  await pool.query(query, [
    payload.customer_phone,
    payload.product_id,
    payload.booking_date,
  ]);
};
