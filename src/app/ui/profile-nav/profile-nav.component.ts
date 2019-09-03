import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class NavItem {

  constructor(
  	public name: String, 
  	public link: String) {}
}



@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent implements OnInit {

  constructor(
  	public router: Router, 
  	) { }

  ngOnInit() {
  }

}
