import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user.model';
import { Permissions } from '../../_models/permission-roles';

@Component({
	selector: 'app-view-users',
	templateUrl: './view-users.component.html',
	styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

	public displayedColumns = ['name','email', 'role', 'dateJoined', 
	'update','delete',
	];

	public dataSource= new MatTableDataSource();
	permissions = Permissions;

	@ViewChild(MatSort, {static: true}) sort: MatSort;

	constructor(public authServices: AuthService) { }

	ngOnInit() {
		this.getAllUsers();
		console.log(this.permissions);
	}

	public getAllUsers(){
		this.authServices.getAllUsers()
		.subscribe((res) =>{

			this.dataSource = new MatTableDataSource(res.users);
			this.dataSource.sort = this.sort;
			// console.log(res.users);
		})
	}

	public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();

  }

  public viewUserRole(value){
  	console.log(value);
  	//trigger alert to save changes
  }

// FIX THIS FUNCTION
   // public redirectToDelete = (link: string) => {
   //  this.postLink = link;
   //  this.bps.deleteBlogPost(this.postLink).subscribe(data => {
   //  	const object = JSON.parse(data);
   //  	console.log(object);
   //  	window.alert("This post " +object.title +" has been deleted");
   //  })
    
  // }
}
