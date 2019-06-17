import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	currentUser: any;
	baseURL = 'http://localhost:5000/api';

	private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

	constructor(
		private http: HttpClient,
		) {	}

	public logIn(credentials: any){
		// localStorage.setItem('Access_Token', "access_token");
		localStorage.setItem('creds', credentials.email);
	}

	public isLoggedIn(){
		return localStorage.getItem('Access_Token') != null;
	}

	public logout(){
		localStorage.removeItem('Access_Token');
	}

	public signUp(user: string){
		console.log('we here')
	}

}
