import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { QuillModule } from 'ngx-quill';

import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';
import { ViewProfileComponent } from './view-profile/view-profile.component'


@NgModule({
	declarations: [
	ViewAllPostsComponent,
	ViewUsersComponent,
	ViewCommentsComponent,
	BlogPostFormComponent,
	ProfileFormComponent,
	ViewProfileComponent
	],
	exports:[
	BlogPostFormComponent,
	ViewAllPostsComponent,
	ViewUsersComponent,
	ViewCommentsComponent,
	ProfileFormComponent
	],
	imports: [
	CommonModule,
	MaterialModule,
	FormsModule,
    QuillModule.forRoot(),
	]
})
export class SharedModule { }
