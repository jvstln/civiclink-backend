import { Request, Response } from "express";


import { OfficialModel } from "../models/official.model"; 

export const getAllOfficials = async (req: Request, res: Response) => {
  try {
    // Fetch all officials from the database
    const officials = await OfficialModel.find({});

    res.status(200).json({
        "success":true,
        "messages": " officials retrieved successfully",
        "data":{officials}

    }); // Return officials in the response
  } catch (error) {
    console.error("Error fetching officials:", error);
    res.status(500).json({ 
        "success":false,
        message: "Server error fetching officials",
     });
  }
};


