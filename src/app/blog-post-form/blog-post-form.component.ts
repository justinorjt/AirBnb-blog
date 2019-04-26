import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/models/blogpost.model';
import { FormsModule } from '@angular/forms';
import { BlogPostService } from 'src/app/SERVICES/blog-post.service'

@Component({
  selector: 'app-blog-post-form',
  templateUrl: './blog-post-form.component.html',
  styleUrls: ['./blog-post-form.component.css']
})
export class BlogPostFormComponent implements OnInit {
// bp:BlogPost;
  constructor(private bps: BlogPostService) { }

  ngOnInit() {
  }

  SubmitPost(event){

    event.preventDefault();
    const bp = new BlogPost()

    bp.header = (event.target.querySelector('#header').value);
    bp.subHeader = (event.target.querySelector('#subheader').value);
    bp.author = (event.target.querySelector('#author').value);
    bp.content = (event.target.querySelector('#content').value);
    bp.hashtags = (event.target.querySelector('#hashtags').value);
    bp.category = (event.target.querySelector('#category').value);

    this.bps.createBlogPost(bp).subscribe((data) => {console.log(data); });

    // console.log(bp);
  }

}
