import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { BlogPostService } from '../../_services/blog-post.service';
import { blogpost} from '../../_models/blogpost.model';
import { BlogPostFormComponent } from '../blog-post-form/blog-post-form.component';

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrls: ['./view-all-posts.component.css']
})
export class ViewAllPostsComponent implements OnInit {

 public displayedColumns = ['title','author', 'category', 'dateCreated', 
 'update', 'delete',
 ];

 public dataSource= new MatTableDataSource();

 @ViewChild(MatSort, {static: true}) sort: MatSort;

 public postLink;
 public PostEdit;

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
 
  public redirectToUpdate = (link: string) => {
    this.postLink = link;
    this.bps.getBlogPost(this.postLink).subscribe(data =>{
    	const object = JSON.parse(data);
    	this.PostEdit = object;
    	console.log(this.PostEdit);
    })
  }
 
  public redirectToDelete = (link: string) => {
    this.postLink = link;
    this.bps.deleteBlogPost(this.postLink).subscribe(data => {
    	const object = JSON.parse(data);
    	console.log(object);
    	window.alert("This post " +object.title +" has been deleted");
    })
    
  }

}
