import { Component, OnInit,Input, Output, ViewEncapsulation, ViewChild, EventEmitter } from '@angular/core';
import { Blogpost} from '../../_models/blogpost.model';
import { User} from '../../_models/user.model';
import { Comment} from '../../_models/comment.model';

@Component({
	selector: 'app-comment-section',
	templateUrl: './comment-section.component.html',
	styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

	@Input() comments:Comment[];
	// Event when the list of comments have been updated
	@Output() commentsUpdated = new EventEmitter();
	// We are using an editor for adding new comments and control it 
	// directly using a reference
	// @ViewChild() newCommentEditor;

	constructor() { }

	ngOnInit() {
	}

}
