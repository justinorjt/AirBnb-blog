import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: LandingpageComponent },
  { path: 'blog-post-form', component: BlogPostFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
