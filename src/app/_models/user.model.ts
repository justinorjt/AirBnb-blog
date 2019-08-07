export interface User {
    email: string;
    password: string;     
    role: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    uid?: string;
    createdAt?: string;
    bio?:string;
}