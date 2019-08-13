import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProfileComponent } from './view-profile/view-profile.component'


const routes: Routes = [
{ path: '', redirectTo: '/:authorName', pathMatch: 'full' },
{ path: '/:authorName', component: ViewProfileComponent,
	children: [
		// { path: '', redirectTo: 'bio', pathMatch: 'full' }, 
		// { path: 'bio', component: BlogPostFormComponent }, //bio component
		// { path: 'bio', component: BlogPostFormComponent }, //view authored post
		// { path: 'bio', component: BlogPostFormComponent }, //contact
		// { path: 'bio', component: BlogPostFormComponent },
	]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProfileRoutingModule { }
