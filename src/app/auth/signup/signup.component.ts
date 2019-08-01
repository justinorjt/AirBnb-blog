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

	constructor(
		public router: Router,
		public auth: AuthService,
		) { }

	ngOnInit() {
	}

	createUser(event){
		event.preventDefault();
	}

	onSubmit(form:NgForm){
		let creds = form.value;

		let newUser = new User(
			form.value.email,
			form.value.password,
			'member',
			);
		console.log(newUser);
		// this.auth.signUp(newUser).subscribe(data => {
		// 	console.log(data);
		// },
		// error =>{
		// 	if (error.status === 500) {
		// 		console.log('wtf man')
		// 	}
		// });
	}
}
