export type listeTables = "abonnement" | "administrateur" | "contenuaudio" | "ecouter" | "enfant" | "payer" | "tuteur" | "utilisateur";

interface attributSelectInterface 
{
    primaryKey : string;
    attribut : Array <string>;
}

const listeAttributSelect : Record < listeTables, attributSelectInterface > =
{
    "abonnement" : 
    {
        primaryKey : `idCarte`,
        attribut : [`idCarte`, `token`, `default`],
    },
    "administrateur" : 
    {
        primaryKey : `utilisateur_idUser`,
        attribut : [`utilisateur_idUser`, `nom`, `prenom`, `email`, `mdp`, `dateNaiss`, `sexe`]
    },
    "contenuaudio" : 
    {
        primaryKey : `idAudio`,
        attribut : [`idAudio`, `nom`, `url`, `cover`, `time`, `type`, `createdat`, `updatedat`],
    },
    "ecouter" : 
    {
        primaryKey : `idAudio` + `idUser`, // /!\ A CONFIRMER
        attribut : [`idAudio`, `idUser`],
    },
    "enfant" : 
    {
        primaryKey : `utilisateur_idUser`,
        attribut : [`utilisateur_idUser`, `nom`, `prenom`, `email`, `mdp`, `dateNaiss`, `sexe`]
    },
    "payer" : 
    {
        primaryKey : `idUser` + `idCarte` + `idAudio`, // /!\ A CONFIRMER
        attribut : [`idUser`, `idCarte`, `idAudio`, `datePaiement`, `montant_HT`, `montant_TTC`, `source`, `createdAt`, `updatedAt`],
    },
    "tuteur" : 
    {
        primaryKey : `utilisateur_idUser`,
        attribut : [`utilisateur_idUser`, `nom`, `prenom`, `email`, `mdp`, `dateNaiss`, `sexe`]
    },
    "utilisateur" : 
    {
        primaryKey : `idUser`,
        attribut : [`idUser`, `nom`, `prenom`, `email`, `mdp`, `dateNaiss`, `sexe`]
    },
};

export default listeAttributSelect;