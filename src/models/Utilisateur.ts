export default class Utilisateur
{
    static save() 
    {
        throw new Error('Method not implemented.');
    }
    public nom : string;
    public prenom : string;
    public email : string;
    public mdp : string;
    public date_naiss : Date;
    public sexe : string;

    constructor(nom : string = '', prenom : string = '', email : string = '', mdp : string = '', date_naiss : Date, sexe : string = '')
    {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.mdp = mdp;
        this.date_naiss = date_naiss;
        this.sexe = sexe;
    }

}