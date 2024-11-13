import pool from "../config/db";
import { GetInstallationsParam, Installation } from "../models/Installation";

export const getInstallations = async (
  param: GetInstallationsParam
): Promise<Installation[]> => {
  try {
    const query = `SELECT * FROM installation WHERE email = ${param.email}`;
    const [rows] = await pool.query<Installation[]>(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

export const createInstallation = async (
  payload: Installation
): Promise<void> => {
  // create installation

  const query =
    "INSERT INTO installation(email,product_id, booking_date) VALUES(?, ?, ?)";
  await pool.query(query, [
    payload.customer_email,
    payload.product_id,
    payload.booking_date,
  ]);
};
