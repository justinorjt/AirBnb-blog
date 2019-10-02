import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';
import { EditorRoutingModule } from './editor-routing.module';

import { EditorComponent } from './editor/editor.component';


@NgModule({
	declarations: [
	EditorComponent
	],
	imports: [
	CommonModule,
	SharedModule,
	UiModule,
	EditorRoutingModule
	]
})
export class EditorModule { }
