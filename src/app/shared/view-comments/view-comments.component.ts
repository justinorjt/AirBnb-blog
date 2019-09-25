import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { CommentService } from '../../_services/comment.service';
import { Comment} from '../../_models/comment.model';

@Component({
	selector: 'app-view-comments',
	templateUrl: './view-comments.component.html',
	styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

	public displayedColumns = ['content','user_email', 'time_posted', 
	'update', 'delete',
	];

  toEdit:boolean = true;
  commentEdit;
  myComments = []


	public dataSource= new MatTableDataSource();

	@ViewChild(MatSort, {static: true}) sort: MatSort;


	 constructor(private cs: CommentService) { }

  ngOnInit() {
  	this.getAllComments();
  }

  public getAllComments = () => {
    this.cs.getAllComments()
    .subscribe((res) => { 
    	this.myComments = (res);
    	this.dataSource = new MatTableDataSource(res);
    	this.dataSource.sort = this.sort;
    });
  }

  getCommentPost(post_id){
    // CALLS BLOGPOST SERVICE TO GET BLOGPOST.NAME THAT CORRESPONDS TO THE ID HERE
    //MUST CHANGE BLOGPOST PRIMARY KEY
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();

  }

  editComment(comment_id){
    this.toEdit = !this.toEdit;
    this.cs.getComment(comment_id).subscribe(data =>{
      this.commentEdit = data;
      console.log(this.commentEdit);
    })
  }

  cancelEdit(){
    this.toEdit = !this.toEdit;
  }

  submitEditComment(editedComment){
    this.toEdit = !this.toEdit;

    const comment_content = (editedComment.value.content);
    const newComment = {"content": comment_content, "user_email":this.commentEdit.user_email, "post_id":this.commentEdit.post_id, "time_posted": this.commentEdit.time_posted};

    console.log(newComment);

    this.cs.updateComment(this.commentEdit._id, newComment).subscribe(data =>{
      if (!data.message){
        this.getAllComments();
      }
      console.log(data);
    });

  }


}
