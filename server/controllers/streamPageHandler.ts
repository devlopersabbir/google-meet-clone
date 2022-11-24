import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const stream = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const v4options = {
    random: [
      0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1,
      0x67, 0x1c, 0x58, 0x36,
    ],
  };

  res.status(200).json({ id: uuidv4(v4options) });
};
export const room = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    res.status(200).json({
      message: "got it",
    });
    console.log(id);
    return id;
  } catch (error) {
    console.log(error);
  }
};
