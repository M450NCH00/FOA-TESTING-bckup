import express from "express";
import { 
    getOG,
    addOG
} from "../controllers/ogController.js";

const router = new express.Router();

router.post("/ogs", addOG);
router.get("/ogs/:id", getOG);

export default router;