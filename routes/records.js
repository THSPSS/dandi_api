import express from "express";
import { getRecords , getRecord , addRecord } from "../controllers/record.js";

const router = express.Router();

router.get("/", getRecords);
router.get("/:member_no", getRecord);
router.post("/", addRecord);

export default router;