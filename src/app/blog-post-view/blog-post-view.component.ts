import { Component, OnInit, Input } from '@angular/core';
import { BlogPostService } from 'src/app/_services/blog-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-blog-post-view',
	templateUrl: './blog-post-view.component.html',
	styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {

	post: any;
	post_id: string;

	show:boolean = false;

	constructor(
		private bps: BlogPostService,
		private route: ActivatedRoute,
		) { }

	ngOnInit() {

		this.getPost();
	}

	getPost(): void {
		// const titleLink = this.route.snapshot.paramMap.get('titleLink');
		// console.log(titleLink);
		const gotoPost = localStorage.getItem('chosenPostID')
		this.bps.getBlogPost(gotoPost)
		.subscribe(post => { this.post = post;
			console.log("me", post._id);
			localStorage.setItem("post_id", post._id);
			console.log(this.post._id);
		});
	};

	loadComments(){
		this.post_id = localStorage.getItem("post_id")
		this.show = !this.show;
		console.log("the try",this.show)
	};

}
