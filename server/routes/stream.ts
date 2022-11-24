import { Router } from "express";
import { room, stream } from "../controllers/streamPageHandler";

const router = Router();

router.get("/", stream);
router.get("/:id", room);

export default router;
