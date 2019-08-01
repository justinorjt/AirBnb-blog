export class User {
  constructor(
    public email: string,
    public password: string,
    public role?: string,
    public firstname?: string,
    public lastname?: string,
    public phonenumber?: string,
    public uid?: string,
    public createdAt?: string,
  ) { }
}