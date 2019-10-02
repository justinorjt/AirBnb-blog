import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPostsComponent } from '../shared/view-all-posts/view-all-posts.component';
import { ProfileFormComponent } from '../shared/profile-form/profile-form.component';
import { ViewCommentsComponent } from '../shared/view-comments/view-comments.component';
// import { ViewUsersComponent } from '../shared/view-users/view-users.component';
import { EditorComponent } from './editor/editor.component';
import { BlogPostFormComponent } from '../shared/blog-post-form/blog-post-form.component';



// const routes: Routes = [];
const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: EditorComponent,
		children: [
			{ path: '', redirectTo: 'profile', pathMatch: 'full' },
			{ path: 'posts', component: ViewAllPostsComponent },
			{ path: 'comments', component: ViewCommentsComponent },
			// { path: 'users', component: ViewUsersComponent },
			{ path: 'profile', component: ProfileFormComponent },
			{ path: 'blog-form', component: BlogPostFormComponent },
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
