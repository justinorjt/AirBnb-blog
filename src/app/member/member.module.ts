import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';
import { MemberRoutingModule } from './member-routing.module';

import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [MemberComponent],
  imports: [
  	SharedModule,
  	UiModule,
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
