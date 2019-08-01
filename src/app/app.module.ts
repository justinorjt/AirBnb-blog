import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PageNotFoundComponent,
    BlogPostViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    FormsModule,
    QuillModule.forRoot(),
    AppRoutingModule, //<---must be the last in the list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
