import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { QuillModule } from 'ngx-quill';

import { ProfileComponent } from './profile/profile.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component'


@NgModule({
	declarations: [
	ProfileComponent,
	ViewAllPostsComponent,
	ViewUsersComponent,
	ViewCommentsComponent,
	BlogPostFormComponent,
	],
	exports:[
	ProfileComponent,
	BlogPostFormComponent,
	ViewAllPostsComponent,
	ViewUsersComponent,
	ViewCommentsComponent,
	],
	imports: [
	CommonModule,
	MaterialModule,
	FormsModule,
    QuillModule.forRoot(),
	]
})
export class SharedModule { }
