import { Component, OnInit,Input, Output, ViewEncapsulation, ViewChild, EventEmitter } from '@angular/core';
import { Blogpost} from '../../_models/blogpost.model';
import { User} from '../../_models/user.model';
import { Comment} from '../../_models/comment.model';
import { CommentService } from '../../_services/comment.service'
import { AuthService } from '../../_services/auth.service'

@Component({
	selector: 'app-comment-section',
	templateUrl: './comment-section.component.html',
	styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

	@Input() post_id_try;
	// Event when the list of comments have been updated
	// @Output() commentsUpdated = new EventEmitter();
	// We are using an editor for adding new comments and control it 
	// directly using a reference
	// @ViewChild() newCommentEditor;
	user_email;
	post_id;
	listofcomments;

	constructor(
		private cs: CommentService,
		private aus: AuthService,
		) { }

	ngOnInit() {
		setTimeout(()=>{
			this.getPostID();
			this.getUserID();
			this.getComments();
		}, 2)

		console.log(this.post_id_try)
		
	}

	getComments(){
		this.cs.getAllBlogPostComments(this.post_id_try)
		.subscribe(commentList => { 
			this.listofcomments = (commentList);
			console.log(this.listofcomments);
		});

	}

	getPostID(){
		this.post_id = localStorage.getItem("post_id");
		// this.post_id = undefined;
	}

	getUserID(){
		this.user_email = localStorage.getItem("user_id");
	}

	onCommentEdited(){
		this.getComments();
	}

	addNewComment(form){
		
		const comment_content = (form.value.content);

		const insertcomment = {"content": comment_content, "user_email":this.user_email, "post_id":this.post_id, "time_posted": new Date()};

		this.cs.createComment(insertcomment).subscribe(data =>{
			if (!data.message){
				this.getComments();
			}
			console.log(data);
		});
		form.reset();
	}
}
