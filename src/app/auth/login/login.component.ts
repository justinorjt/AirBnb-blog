import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/shared/models/user.model'
import { AuthService } from 'src/app/_services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private auth: AuthService, private router: Router) { }

	ngOnInit() {}

	isSubmitted = false;


	onSubmit(form:NgForm){
		let creds = form.value;
		this.isSubmitted = true;
		console.log(form.value.email);

		// this.auth.logIn(creds);
		this.router.navigateByUrl('/admin');
		// this.auth.logIn(form.value.email, form.value.password).subscribe(data => {
			// 	console.log(data);
			// },
			// error =>{
				// 	if (error.status === 500) {
					// 		// this.message = 'User Email Already exists'
					// 		console.log('wtf man')
					// 	}
					// });
		}
}
