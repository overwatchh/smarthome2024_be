import { Request, Response } from "express";
import { getProducts } from "../services/productService";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};
