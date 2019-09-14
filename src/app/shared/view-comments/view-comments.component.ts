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

	public displayedColumns = ['content','user_email', 'time_posted', 'post_id', 
	'update', 'delete',
	];

	public dataSource= new MatTableDataSource();

	@ViewChild(MatSort, {static: true}) sort: MatSort;


	 constructor(private cs: CommentService) { }

  ngOnInit() {
  	this.getAllComments();
  }

  public getAllComments = () => {
    this.cs.getAllComments()
    .subscribe((res) => { 
    	// const objectData = JSON.parse(res);
    	this.dataSource = new MatTableDataSource(res);
    	this.dataSource.sort = this.sort;
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();

  }


}
