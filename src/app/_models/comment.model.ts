import {User} from './user.model';

export interface Comment {
   content:string,
   user:User,
   time_posted:string,
}