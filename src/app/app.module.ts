import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HttpModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PageNotFoundComponent,
    BlogPostFormComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    HttpClientModule,
    UiModule,
    FormsModule,
    AppRoutingModule, //<---must be the last in the list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
