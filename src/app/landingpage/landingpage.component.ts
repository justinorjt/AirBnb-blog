import { Component, OnInit } from '@angular/core';
import { GoogleArticlesService } from '../services/google-articles.service';

@Component({
	selector: 'app-landingpage',
	templateUrl: './landingpage.component.html',
	styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

	bnbArticles:any;

	constructor(private gas: GoogleArticlesService) { }

	ngOnInit() {
		this.fetchArticles();
		// console.log(this.bnbArticles)
	}

	fetchArticles(){
		return this.gas.getArticles()
		.subscribe((data) => {
			console.log(data);
			this.bnbArticles = data;
		});
	}
}
