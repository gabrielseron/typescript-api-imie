export default class EmailException extends Error
{
    constructor()
    {
        super('Une ou plusieurs données sont erronnées')
    }

    static checkEmail(email: string): boolean 
    {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return (!reg.test(email.toLowerCase().trim()))
    }

    static compareMail(email:string) : boolean
    {
        return true;
    }
}