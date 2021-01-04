import { createConnection, Connection } from 'mysql';
import Utilisateur from '../models/Utilisateur';
import listeAttribut, { listeTables } from '../utils/listeAttribut';


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
    
}
