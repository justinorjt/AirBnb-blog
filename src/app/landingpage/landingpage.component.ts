import { Component, OnInit } from '@angular/core';
import { GoogleArticlesService } from '../_services/google-articles.service';
import { BlogPostService } from 'src/app/_services/blog-post.service'
import { AuthService } from 'src/app/_services/auth.service'
import { YoutubeService } from 'src/app/_services/youtube.service'
import { KitcollectionService } from 'src/app/_services/kitcollection.service'
import { Observable, interval, timer } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-landingpage',
	templateUrl: './landingpage.component.html',
	styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
	loggedIn:boolean;
	bnbArticles:any;
	rawkits:any;
	embedkits = [];
	rawvids: any;
	embedvids = [];
	blogposts:any = [];
	slideIndex = 0;
	timer = timer(2000,1000);
	// collections = [
	// 	{"link":"https://kit.com/embed?url=https://kit.com/rakidzich/heavy-duty-airbnb-gear"},	
	// 	{"link":"https://kit.com/embed?url=https://kit.com/rakidzich/3-tips-to-get-rich-faster-video"},	
	// 	];




	constructor(
		private gas: GoogleArticlesService, 
		private bps: BlogPostService,
		private kcs: KitcollectionService,
		private yts: YoutubeService,
		private auth: AuthService,
		private sanitizer: DomSanitizer,
		private router: Router,
		) {
		 }

	ngOnInit() {
		this.fetchArticles();
		this.displayBlogPosts();
		this.fetchYoutube();
		this.fetchKits();
		
		interval(5000).subscribe((x) => {

		});
	}

	fetchArticles(){
		return this.gas.getArticles()
		.subscribe((data: string) => {
			this.bnbArticles = data;
		});
	}

	fetchKits(){
		return this.kcs.getKits()
		.subscribe((data) => {
			this.rawkits = data;

			for  ( let item of this.rawkits){
				const embed = "https://kit.com/embed?url=" + item.link;
				const clean = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
				this.embedkits.push(clean);
			}
			this.embedkits = this.embedkits.slice(0,5);
		});
	}

	fetchYoutube(){
		return this.yts.getVideos()
		.subscribe((data) => {
			this.rawvids = data;
			
			for  ( let item of this.rawvids){
				const embed = "https://www.youtube.com/embed/" + item.video;
				const clean = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
				this.embedvids.push(clean);
			}
			this.embedvids = this.embedvids.slice(0,3);
			// console.log(this.embedvids);
		});
	}

	displayBlogPosts(){
		return this.bps.getAllBlogPost()
		.subscribe((data) => {
			console.log(data);
			this.blogposts = data;
		});
	}

	goTo(post){

		for (let item of this.blogposts){
			if (item._id === post._id){
				localStorage.setItem("chosenPostID", item._id);
				console.log(item);
				this.router.navigate(['/post/', item.titleLink])
			}
		}
		
	}

	// frame = 'https://kit.com/rakidzich/heavy-duty-airbnb-gear';
	// oneFrame = this.sanitizer.sanitize(this.frame, 'oke');

	carousel() {

	//setup carousel and i frame movements tomorrow
	}
}
