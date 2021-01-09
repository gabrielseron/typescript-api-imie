import { createConnection, Connection } from 'mysql';
import Utilisateur from '../models/Utilisateur';
import listeAttributSelect, { listeTables } from '../utils/listeAttribut';


export interface jointureInterface {
    type: 'LEFT' | 'RIGHT' | 'FULL' | 'INNER';
    where: {
        table: listeTables;
        foreignKey: string;
    }
    table: listeTables;

}

export default abstract class MySQL 
{
    static checkExistingMail(email: string) : boolean
    {
        const bdd: Connection = createConnection(
        { // Init params to database
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            port: parseInt((process.env.PORTMYSQL === undefined) ? '3306' : process.env.PORTMYSQL) // 3306 port default to mysql
        })
        bdd.connect(err => 
        {
            if (err) console.log('Connection database error');
        })
        var status = false
        if (bdd.query(`SELECT * FROM utilisateur WHERE EMAIL = ${email} `)) 
        {
            status = true;
        }
        
        return status;
    }

}