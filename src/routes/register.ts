import { Router } from 'express';
import { Request, Response } from 'express';
import { registerController } from '../controller/registerController';
import { registerMidd, authMidd } from '../middlewares/register.middleware';


const route: Router = Router();

route.get('/', authMidd, (req: Request, res: Response) => {
    return res.end('<h1>OOUUUIII tu es connecté</h1>')
})
route.post('/register', registerMidd, registerController.register)

export { route as AuthentificationRoute }