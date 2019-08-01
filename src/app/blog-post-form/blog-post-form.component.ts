import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/_models/blogpost.model';
import { FormsModule } from '@angular/forms';
import { BlogPostService } from 'src/app/_services/blog-post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-post-form',
  templateUrl: './blog-post-form.component.html',
  styleUrls: ['./blog-post-form.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class BlogPostFormComponent implements OnInit {

  constructor(
    private bps: BlogPostService,
    public router: Router,
    ) { }

  previewPost: any;

  editorStyle = {
    height: '300px',
    backgroundColor: 'white',
  }

  previewContent: string;

  modalClosed: boolean = true;

  ngOnInit() {
  }

  SubmitPost(blogpost){


    const bp = blogpost.value;

    const hyphenatedTitle = bp.title.replace(/[^a-z0-9+]+/gi, '+');

    bp.titleLink = hyphenatedTitle;

    // console.log(bp);

    this.previewPost = bp;

    this.bps.createBlogPost(bp).subscribe((data) => {
      console.log(data); 
      window.alert("You're post has been submitted");
      this.router.navigate(['/home']);

    },
    (err) => {console.log(err);
    });


  }

  PreviewPost(content, postDetails){

    this.previewPost = postDetails.value;

    this.previewContent = content;

    this.modalClosed = false;

  }

  exitPreview(){
    this.modalClosed = true;
  }

}
