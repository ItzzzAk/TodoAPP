import express from "express";
import {
  newTask,
  getMyTask,
  deleteTask,
  putTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMyTask);
router.route("/:id").put(isAuthenticated,putTask).delete(isAuthenticated,deleteTask);

export default router;
