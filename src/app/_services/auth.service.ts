import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user.model'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	currentUser: any;
	base_URL = 'http://localhost:5000/api';

	httpHeaders = new HttpHeaders ({
		'Content-Type': 'application/json',
	});

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

	public getUser(){

	}

	public getAllUsers(){

		const url = `${this.base_URL}/allusers`;
		return this.http.get<any>(url, {headers: this.httpHeaders} )
		.pipe(map((data) => {
			const objectData = JSON.parse(data)
			return objectData;
		}));
	}

}
