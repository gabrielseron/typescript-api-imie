import MySQL from '../db/MySQL';

export default class Utilisateur
{
    protected idUser : number | null
    public nom : string;
    public prenom : string;
    public email : string;
    public mdp : string;
    public date_naiss : Date;
    public sexe : string;
    protected table: string = 'Utilisateur';
    

    constructor(nom : string = '', prenom : string = '', email : string = '', mdp : string = '', date_naiss : Date, sexe : string = '')
    {
        this.nom = Utilisateur.nom;
        this.prenom = Utilisateur.prenom;
        this.email = Utilisateur.email;
        this.mdp = Utilisateur.mdp;
        this.date_naiss = Utilisateur.date_naiss;
        this.sexe = Utilisateur.sexe;
        this.idUser = Utilisateur.id
    }
}