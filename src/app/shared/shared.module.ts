import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
// import { } from '.'
import { MaterialModule } from '../material/material.module';

@NgModule({
	declarations: [
	ProfileComponent,
	ViewAllPostsComponent,
	ViewUsersComponent,
	ViewCommentsComponent,
	],
	exports:[
	ProfileComponent,
	],
	imports: [
	CommonModule,
	MaterialModule,
	]
})
export class SharedModule { }
