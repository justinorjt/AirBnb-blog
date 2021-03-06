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
  memberNav:NavItem[];
  editorNav:NavItem[];

  constructor( public router: Router) { 

  	this.adminNav = [
      new NavItem('Profile', './profile'),
      new NavItem('All Posts', './posts'),
      new NavItem('All Comments', './comments'),
      new NavItem('Users', './users'),
    ];

    this.editorNav = [
      new NavItem('Profile', './profile'),
      new NavItem('Posts', './posts'),
      new NavItem('Comments', './comments'),
      // new NavItem('Users', './users'),
    ];

    this.memberNav = [
      new NavItem('Profile', './profile'),
      new NavItem('Viewed Posts', './posts'),
      // new NavItem('Comments', './comments'),
      // new NavItem('Users', './users'),
    ];

  }


  ngOnInit() {
  }

}
