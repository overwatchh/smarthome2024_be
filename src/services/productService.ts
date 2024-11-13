import pool from "../config/db";
import { Product } from "../models/Product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const query = "SELECT * FROM product";
    const [products] = await pool.query<Product[]>(query);
    return products;
  } catch (error) {
    throw error;
  }
};
