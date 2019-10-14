import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileFormComponent } from '../shared/profile-form/profile-form.component';
import { MemberComponent } from './member/member.component';
import { ViewAllPostsComponent } from '../shared/view-all-posts/view-all-posts.component';


// const routes: Routes = [];
const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: MemberComponent,
		children: [
			{ path: '', redirectTo: 'profile', pathMatch: 'full' },
			{ path: 'posts', component: ViewAllPostsComponent },
			// { path: 'comments', component: ViewCommentsComponent },
			// { path: 'users', component: ViewUsersComponent },
			{ path: 'profile', component: ProfileFormComponent },
			// { path: 'blog-form', component: BlogPostFormComponent },
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
