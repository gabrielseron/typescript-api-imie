import { Router } from 'express';
import { Request, Response } from 'express';
import { registerController } from '../controller/registerController';
import { registerMidd, authMidd } from '../middlewares/register.middleware';


const route: Router = Router();


route.post('/register', registerMidd, registerController.register)

export { route as AuthentificationRoute }