import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/models/blogpost.model';
import { FormsModule } from '@angular/forms';
import { BlogPostService } from 'src/app/_services/blog-post.service';
// import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-blog-post-form',
  templateUrl: './blog-post-form.component.html',
  styleUrls: ['./blog-post-form.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class BlogPostFormComponent implements OnInit {

  constructor(private bps: BlogPostService) { }

  previewPost: any;

  editorStyle = {
    height: '300px',
    backgroundColor: 'white',
  }

  previewContent: string;

  ngOnInit() {
  }

  SubmitPost(blogpost){

  
    const bp = blogpost.value;

    this.previewPost = bp;

    // this.bps.createBlogPost(bp).subscribe((data) => {console.log(data); });

  }

  PreviewPost(content, postDetails){

    const precontent = content; 

    this.previewPost = postDetails.value;

    this.previewContent = precontent;

    // console.log(this.previewContent)
  }

}
