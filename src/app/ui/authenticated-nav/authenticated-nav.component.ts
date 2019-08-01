import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class NavItem {
  constructor(public name: String, public link: String) {}
}

@Component({
  selector: 'app-authenticated-nav',
  templateUrl: './authenticated-nav.component.html',
  styleUrls: ['./authenticated-nav.component.css']
})
export class AuthenticatedNavComponent implements OnInit {

  adminNav:NavItem[];
  userNav:NavItem[];
  editorNav:NavItem[];

  constructor( public router: Router) { 

  	this.adminNav = [
      new NavItem('Profile', './profile'),
      new NavItem('Posts', './posts'),
      new NavItem('Comments', './comments'),
      new NavItem('Users', './users'),
    ];

  }


  ngOnInit() {
  }

}
