import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';
import { ViewAllKitsComponent } from './view-all-kits/view-all-kits.component';

// LAZY MODULE
import {AuthModule} from './auth/auth.module';
import {AdminModule} from './admin/admin.module';
import {EditorModule} from './editor/editor.module';
import {ViewProfileModule} from './view-profile/view-profile.module'

const routes: Routes = [
{ path: 'home', component: LandingpageComponent },
{ path: 'post/:titleLink', component: BlogPostViewComponent },
{ path: 'kit-collections', component: ViewAllKitsComponent },

// LAZY LOADED MODULES
 {path: 'auth', loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule)},
 {path: 'admin', loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule)},
 {path: 'editor', loadChildren: () => import('./editor/editor.module').then(editor => editor.EditorModule)},
 {path: 'athor', loadChildren: () => import('./view-profile/view-profile.module').then(profile => profile.ViewProfileModule)},


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
