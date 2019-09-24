import { Component,Input, Output, ViewEncapsulation, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { CommentService, } from '../../_services/comment.service'
import {Pipe} from '@angular/core';
import {Moment} from 'moment';
import { Blogpost } from '../../_models/blogpost.model';
import { User } from '../../_models/user.model';
import { Comment } from '../../_models/comment.model';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	// The time of the comment as a timestamp
	@Input() time_posted;
	@Input() comment;
	// The user object of the user who created the comment
	// @Input() user:User;
	@Input() user_id;
	// The comment content
	@Input() content;
	// @Input() editComment;
	@Input() post_id;

	// If a comment was edited this event will be emitted
	@Output() commentEdited = new EventEmitter();

	user:User;
	toEdit:boolean = true;

	constructor(
		private aus: AuthService,
		private cs: CommentService,
		) { }

	ngOnInit() {
		this.getUserInfo(this.user_id)
	}

	onContentSaved(content) {
		this.commentEdited.next(content);
	}

	cancelEdit(){
		this.toEdit = !this.toEdit;		
	}

	editComment(e){
		this.toEdit = !this.toEdit;
		console.log(e.target.value)
	}

	submitEditComment(comment){
		this.toEdit = !this.toEdit;

		const comment_content = (comment.value.content);
		const commentEdit = {"content": comment_content, "user_email":this.comment.user_email, "post_id":this.comment.post_id, "time_posted": this.comment.time_posted};

		// console.log(this.comment.post_id);

		this.cs.updateComment(this.comment._id, commentEdit).subscribe(data =>{
			if (!data.message){
				// this.getComments();
				this.commentEdited.emit();
			}
			console.log(data);
		});

	}

	getUserInfo(user_id){
		this.aus.getUser(user_id)
		.subscribe(data => { 
			this.user = data.user;
			// console.log(this.user);
			// console.log(user_id);
		});
	} 

}
