import { Component, OnInit } from '@angular/core';
import { GoogleArticlesService } from '../_services/google-articles.service';
import { BlogPostService } from 'src/app/_services/blog-post.service'
import { AuthService } from 'src/app/_services/auth.service'

@Component({
	selector: 'app-landingpage',
	templateUrl: './landingpage.component.html',
	styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
	loggedIn:boolean;
	bnbArticles:any;
	blogposts:any = [];

	constructor(
		private gas: GoogleArticlesService, 
		private bps: BlogPostService,
		private auth: AuthService,
		) { }

	ngOnInit() {
		this.fetchArticles();
		this.displayBlogPosts();
	}

	fetchArticles(){
		return this.gas.getArticles()
		.subscribe((data) => {
			console.log(data);
			this.bnbArticles = data;
		});
	}

	displayBlogPosts(){
		return this.bps.getAllBlogPost()
		.subscribe((data: string) => {
			// for
			const objectdata = JSON.parse(data);
			console.log(objectdata);
			this.blogposts = objectdata;
		});
	}

	viewPost(){
		
	}

	checkCred(){
		// this.auth.
	}
}
