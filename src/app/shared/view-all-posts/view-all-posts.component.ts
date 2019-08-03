import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { BlogPostService } from '../../_services/blog-post.service';
import { blogpost} from '../../_models/blogpost.model'

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrls: ['./view-all-posts.component.css']
})
export class ViewAllPostsComponent implements OnInit {

 public displayedColumns = ['title','author', 'category', 'dateCreated', 
 // 'details,', 'edit', 'delete'
 ];

 public dataSource= new MatTableDataSource();

 @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bps: BlogPostService) { }

  ngOnInit() {
  	this.getAllPost();
  }

  public getAllPost = () => {
    this.bps.getAllBlogPost()
    .subscribe((res: string) => { 
    	const objectData = JSON.parse(res);
    	this.dataSource = new MatTableDataSource(objectData);
    	this.dataSource.sort = this.sort;
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();

  }

  public redirectToDetails = (id: string) => {
    
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }

}
