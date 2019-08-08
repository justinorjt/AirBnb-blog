import { Component, OnInit } from '@angular/core';
import { GoogleArticlesService } from '../_services/google-articles.service';
import { BlogPostService } from 'src/app/_services/blog-post.service'
import { AuthService } from 'src/app/_services/auth.service'
import { Observable, interval, timer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-landingpage',
	templateUrl: './landingpage.component.html',
	styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
	loggedIn:boolean;
	bnbArticles:any;
	blogposts:any = [];
	slideIndex = 0;
	timer = timer(2000,1000);

	collections = [
		{"link":"https://kit.com/embed?url=https://kit.com/rakidzich/heavy-duty-airbnb-gear"},	
		];

	constructor(
		private gas: GoogleArticlesService, 
		private bps: BlogPostService,
		private auth: AuthService,
		private sanitizer: DomSanitizer,
		) { }

	ngOnInit() {
		this.fetchArticles();
		this.displayBlogPosts();
		
		interval(5000).subscribe((x) => {

		});
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
			console.log(data);
			this.blogposts = data;
		});
	}

	viewPost(){
		
	}

	// frame = 'https://kit.com/rakidzich/heavy-duty-airbnb-gear';
	// oneFrame = this.sanitizer.sanitize(this.frame, 'oke');

	carousel() {

	//setup carousel and i frame movements tomorrow
	}
}
