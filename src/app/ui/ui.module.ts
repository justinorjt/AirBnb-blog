import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AuthenticatedNavComponent } from './authenticated-nav/authenticated-nav.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';

@NgModule({
  declarations: [
  HeaderComponent, 
  FooterComponent, 
  LayoutComponent, 
  AuthenticatedNavComponent, ProfileNavComponent,
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
  ]
})
export class UiModule { }
