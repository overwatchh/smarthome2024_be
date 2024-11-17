import express, { Request, Response } from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import installationRoutes from "./routes/installationRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";

dotenv.config();

const app = express();
app.use(express.json());

// product apis
app.use("/api", productRoutes);
// installation apis
app.use("/api", installationRoutes);
// invoice apis
app.use("/api", invoiceRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
