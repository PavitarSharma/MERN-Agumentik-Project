import express from "express";
import {
  createUser,
  getAllUsers,
  login,
  updateprofile,
  updateRole,
} from "../controllers/user.controller.js";
import { auth, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.post("/users/signUp", createUser);
router.post("/users/login", login);
router.get("/users", auth, authorizeRoles("admin"), getAllUsers);
router.put("/users/role/:id", auth, authorizeRoles("admin"), updateRole);
router.put("/users/profile/:id", auth, updateprofile);
export default router;
