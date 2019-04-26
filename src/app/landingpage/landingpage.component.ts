import { Component, OnInit } from '@angular/core';
import { GoogleArticlesService } from '../services/google-articles.service';
import { BlogPostService } from 'src/app/SERVICES/blog-post.service'

@Component({
	selector: 'app-landingpage',
	templateUrl: './landingpage.component.html',
	styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

	bnbArticles:any;
	blogposts:any = [];

	constructor(private gas: GoogleArticlesService, private bps: BlogPostService) { }

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
}
