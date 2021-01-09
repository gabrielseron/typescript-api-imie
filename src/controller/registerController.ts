import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import Utilisateur from '../models/Utilisateur'
import PasswordException from '../exception/register/PasswordException';
export class registerController
{
    static register = async(req: Request, res: Response) => {
        let data: any = req.body;

        try {

            const user = new Utilisateur(data.nom, data.prenom, data.email, data.mdp, data.dateNaiss, data.sexe);
            await Utilisateur.save();
            const pass = await PasswordException.hashPassword(data.password);

        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
        }
    }

    refreshToken = async(req: Request, res: Response) => {}
    checkToken = async(req: Request, res: Response) => {}
    logout = async(req: Request, res: Response) => {}
}