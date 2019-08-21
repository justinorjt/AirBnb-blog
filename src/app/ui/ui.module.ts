import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthenticatedNavComponent } from './authenticated-nav/authenticated-nav.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
  HeaderComponent, 
  FooterComponent, 
  LayoutComponent, 
  AuthenticatedNavComponent, ProfileNavComponent, CommentSectionComponent, CommentComponent,
  ],
  exports:[
  HeaderComponent, 
  FooterComponent, 
  LayoutComponent,
  AuthenticatedNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class UiModule { }
