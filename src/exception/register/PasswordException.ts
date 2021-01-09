import { hash } from "bcrypt";

export default class PasswordException extends Error 
{

    private static SALT_ROUNDS: number = 12;
    private static MIN_PASS_SIZE: number = 8;

    constructor() {
        super('Une ou plusieurs données sont erronnées')
    }

    public static isValidPassword(password: string): boolean {
        return password.length >= this.MIN_PASS_SIZE;
    }

    public static async hashPassword(password: string): Promise < string > {
        return await hash(password, this.SALT_ROUNDS)
    }

}