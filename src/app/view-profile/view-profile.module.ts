import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatedNavComponent } from '../ui/authenticated-nav/authenticated-nav.component'

import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [ViewProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViewProfileRoutingModule
  ]
})
export class ViewProfileModule { }
