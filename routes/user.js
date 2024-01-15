import { defRoute,  login, register,  getMyProfile , logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import express from "express";

const router = express.Router();

router.get("/", defRoute);



router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);




router.get("/me", isAuthenticated,getMyProfile);

export default router;
