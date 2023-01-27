import express from "express";
import { createData, getAllData } from "../controllers/info.controller.js";

import { authorizeRoles, auth } from "../middlewares/auth.js";
const router = express.Router();

router.get("/info", auth, authorizeRoles("admin"), getAllData);

router.post("/info", auth, createData);

export default router;