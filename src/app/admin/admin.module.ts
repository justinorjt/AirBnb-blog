import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';

import { AdminComponent } from './admin.component';
import { ViewAllPostsComponent } from '../shared/view-all-posts/view-all-posts.component';



@NgModule({
  declarations: [
    AdminComponent,  
  ],
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
