import { Component,Input, Output, ViewEncapsulation, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
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
	// The user object of the user who created the comment
	// @Input() user:User;
	@Input() user_id;
	// The comment content
	@Input() content;
	@Input() editComment;
	// @Input() post_id;

	// If a comment was edited this event will be emitted
	@Output() commentEdited = new EventEmitter();

	user:User;

	constructor(
		private aus: AuthService,
		) { }

	ngOnInit() {
		this.getUserInfo(this.user_id)
	}

	onContentSaved(content) {
		this.commentEdited.next(content);
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
