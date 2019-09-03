import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/_models/user.model'
import { AuthService } from 'src/app/_services/auth.service'

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	invited:boolean = false;
	editUser;

	constructor(
		public router: Router,
		public auth: AuthService,
		) { }

	ngOnInit() {
	}

	createUser(event){
		event.preventDefault();
	}

	getDate(){
		let today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); 
		const yyyy = today.getFullYear();

		const thisDay = mm + '/' + dd + '/' + yyyy;
		return thisDay;
	}

	onSubmit(form:NgForm){
		
		let newUser: User ={
			firstname: form.value.firstname,
			lastname: form.value.lastname,
			phone: form.value.phone,
			bio: form.value.bio,
			email: form.value.email,
			password: form.value.password,
			role:'Member',
			dateJoined: this.getDate(),
		};
		console.log(newUser);
		this.auth.signUp(newUser).subscribe(data => {
			console.log(data);
		},
		error =>{
			if (error.status === 500) {
				console.log('wtf man')
			}
		});
	}
}
