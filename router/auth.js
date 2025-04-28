import { Router } from "express";
import sigIn from "../controllers/auth/sigIn.js";
import sigInSchema from '../shemas/auth/singIn.js'
import sinOutSchema from '../shemas/auth/signOut.js'
import validator from "../middlewares/validator.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import validatePassword from "../middlewares/validatePassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import validateToken from "../middlewares/validateToken.js";

const routerAuth = Router();    
routerAuth.post('/sigIn',validator(sigInSchema),accountNotExist, validatePassword,generateToken,sigIn)
routerAuth.post('/signOut',validator(sinOutSchema),validateToken.authenticate('jwt',{session:false}), signOut)

export default routerAuth