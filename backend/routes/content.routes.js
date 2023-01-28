import express from "express";
import {
  createContentData,
  getAllContentData,
  getContentData,
  updateContentData,
} from "../controllers/content.controller.js";

import { authorizeRoles, auth } from "../middlewares/auth.js";
const router = express.Router();

router.get("/content", auth, getAllContentData);

router.get("/content/:id", auth, getContentData);

router.post("/content", auth, authorizeRoles("admin"), createContentData);

router.put("/content/:id", auth, updateContentData);

export default router;
