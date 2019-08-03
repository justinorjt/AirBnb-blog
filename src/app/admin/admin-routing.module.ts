import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllPostsComponent } from '../shared/view-all-posts/view-all-posts.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { ViewCommentsComponent } from '../shared/view-comments/view-comments.component';
import { ViewUsersComponent } from '../shared/view-users/view-users.component';
import { AdminComponent } from './admin.component';
// import { AuthenticatedNavComponent } from '../ui/authenticated-nav/authenticated-nav.component';
import {BlogPostFormComponent} from '../shared/blog-post-form/blog-post-form.component';

const routes: Routes = [
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: AdminComponent,
children: [
{ path: '', redirectTo: 'profile', pathMatch: 'full' },
{ path: 'posts', component: ViewAllPostsComponent },
{ path: 'comments', component: ViewCommentsComponent },
{ path: 'users', component: ViewUsersComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'blog-form', component: BlogPostFormComponent },
]
}
// ,
// { path: 'posts', component: ViewAllPostsComponent },
// { path: 'comments', component: ViewCommentsComponent },
// { path: 'users', component: ViewUsersComponent },
// { path: 'profile', component: ProfileComponent },

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
