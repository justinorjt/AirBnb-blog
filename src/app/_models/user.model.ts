export interface User {
    email: string;
    password: string;     
    role: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    user_id?: string;
    dateJoined?: string;
    bio?:string;
    profilePic?:any;
}