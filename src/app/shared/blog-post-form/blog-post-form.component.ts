import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/_models/blogpost.model';
import { FormsModule, NgForm } from '@angular/forms';
import { BlogPostService } from 'src/app/_services/blog-post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-post-form',
  templateUrl: './blog-post-form.component.html',
  styleUrls: ['./blog-post-form.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class BlogPostFormComponent implements OnInit {
  @Input() editPost: any;

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
    if (this.editPost) {
      // code...
      // this.editBlogPost(this.previewPost);
    }
  }

  SubmitPost(blogpost){


    const bp = blogpost.value;

    const hyphenatedTitle = bp.title.replace(/[^a-z0-9+]+/gi, '+');

    bp.titleLink = hyphenatedTitle;

    // console.log(bp);

    this.previewPost = bp;

    this.bps.createBlogPost(bp).subscribe((data) => {
      console.log(data); 
      if (data.message) {
        window.alert(data.message);
      } else{
        window.alert("You're post has been submitted");
        this.router.navigate(['/home']);
      }
      

    },
    (err) => {console.log(err);
    });


  }

  showPreview(content, postDetails){

    this.previewPost = postDetails.value;

    this.previewContent = content;

    this.modalClosed = false;

  }

  exitPreview(){
    this.modalClosed = true;
  }

  updateBlogPost(tLink, blogPost){
    const bp = blogPost.value;

    const hyphenatedTitle = bp.title.replace(/[^a-z0-9+]+/gi, '+');

    bp.titleLink = hyphenatedTitle;

    // console.log(bp);

    this.previewPost = bp;

    this.bps.updateBlogPost(tLink, bp).subscribe((data) => {
      console.log(data); 
      window.alert("You're post has been updated");
      // this.router.navigate(['/home']);

    },
    (err) => {console.log(err);
    });

  }

}
