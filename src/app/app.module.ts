import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
 
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';
import { ViewAllKitsComponent } from './view-all-kits/view-all-kits.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PageNotFoundComponent,
    BlogPostViewComponent,
    ViewAllKitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    UiModule,
    FormsModule,
    BrowserAnimationsModule,
    MomentModule,
    QuillModule.forRoot(),
    AppRoutingModule, //<---must be the last in the list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
