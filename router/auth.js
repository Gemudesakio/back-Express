import { Router } from "express";
import sigIn from "../controllers/auth/sigIn.js";
import sigInSchema from '../shemas/auth/singIn.js'
import validator from "../middlewares/validator.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import validatePassword from "../middlewares/validatePassword.js";

const routerAuth = Router();    
routerAuth.post('/sigIn',validator(sigInSchema),accountNotExist, validatePassword,sigIn)

export default routerAuth