import { Request, Response } from "express";
import { createInstallation } from "../services/installationService";
import { Installation } from "../models/Installation";
export const addInstallation = async (req: Request<{},Installation>, res: Response) => {
  try {
    const installationInfo = req.body;
    const installationId = await createInstallation(installationInfo);

    res.status(201).json({
      message: "Installation created succuessfully",      
    });
  } catch (error) {    
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
