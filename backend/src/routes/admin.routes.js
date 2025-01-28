import express from "express";
import {
  addAdmin,
  addCharacterStock,
  adminLogin
} from "../controllers/admin.controllers.js";
import { verifyAdminJWT } from "../middlewares/auth.middlewares.js";

const adminRouter = express.Router();

adminRouter
  .route("/login")
  .post(adminLogin);

//protected routes
adminRouter.use(verifyAdminJWT);

adminRouter
  .route("/add-admin")
  .post(addAdmin);
adminRouter
  .route('/add-character-stock')
  .post(addCharacterStock)

export default adminRouter;
