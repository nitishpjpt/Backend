import { Router } from "express";
import { adminRegister } from "./admin.controller.js";
import { adminLogin } from "./admin.controller.js";

const routes = Router();

routes.post("/register", adminRegister);
routes.post("/login", adminLogin);

export default routes;
