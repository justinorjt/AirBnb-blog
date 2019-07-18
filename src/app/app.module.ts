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
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PageNotFoundComponent,
    BlogPostFormComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent
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
