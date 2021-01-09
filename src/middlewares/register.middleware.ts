import { Request, Response } from 'express';
import DateException from '../exception/register/DateException';
import EmailException from '../exception/register/EmailException';
import PasswordException from '../exception/register/PasswordException';
import MySQL from '../db/MySQL';
import { verify } from 'jsonwebtoken';


const split = (token: string) => { return token.split('Bearer ').join('') }

export const authMidd = (req: Request, res: Response, next: () => void) => {

    // req.header.authorization = 'Bearer opfokre65ze4f6ez54f6ez4f6z4f6ze87f6ez4fe8z7fze486fez68fe6z5f4e6z54f8ef864ez84fe8ze.9e4fz9e64f6e5z4f6ez54f654ez
    try {
        if (req.headers.authorization && verify(split(req.headers.authorization), < string > process.env.JWT_KEY))
            return next()
        else
            throw new Error(`Authorization not found`)
    } catch (err) {
        return res.status(401).json({ error: true, message: err.message }).end();
    }

}

export const registerMidd = (req: Request, res: Response, next: () => void) => 
{

    let data: any = req.body;

    const champsRequire = [`firstname`, `lastname`, `email`, `password`, `date_naissance`, `sexe`]


    let errorCode : number = 0;
    
    try {
        let error: boolean = true;

        for (const require in champsRequire) {
            error = true;
            for (const champs in data) {
                if (champs === champsRequire[require])
                    error = false;
            }
            if (error)
            {
                errorCode = 400;
                throw new Error(`Une ou plusieurs données obligatoire sont manquantes`)
            }
            
        }


        if (EmailException.checkEmail(data.email))
        {
            errorCode = 409;
            throw new EmailException();
        }
            
        if (!PasswordException.isValidPassword(data.password))
        {
            errorCode = 409;
            throw new PasswordException();
        }
            
        if (!DateException.checkDate(data.dateNaiss))
        {
            errorCode = 409;
            throw new DateException();
        }
            
        if (MySQL.checkExistingMail(data.email) == true)
        {
            errorCode = 409;
            throw new Error(`Un compte utilisant cette adresse mail est déja enregistré`);
        }

        next()

    } catch (err) {
        return res.status(errorCode).json({ error: true, message: err.message }).end();
    }
}