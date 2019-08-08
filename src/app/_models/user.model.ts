export interface User {
    email: string;
    password: string;     
    role: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    uid?: string;
    dateJoined?: string;
    bio?:string;
}