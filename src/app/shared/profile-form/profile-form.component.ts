import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/_models/user.model'

@Component({
	selector: 'app-profile-form',
	templateUrl: './profile-form.component.html',
	styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

	constructor() { }

	editUser;


	editorStyle = {
		height: '150px',
		backgroundColor: 'var(--light-blue)',
	}

	config = {
		toolbar: [
		['bold', 'italic', 'underline',],
		[{ 'header': 1 }, { 'header': 2 }],               // custom button values
		[{ 'list': 'ordered'}, { 'list': 'bullet' }],
		[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

		[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
		[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

		[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		[{ 'font': [] }],
		[{ 'align': [] }],

		// ['clean'],                                         // remove formatting button

		['link', 'image',]  
		]
	}

	ngOnInit() {
	}

}
