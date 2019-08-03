import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatTableModule, 
	MatSortModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,

} from '@angular/material';
// import {MatIconModule} from '@angular/material/icon';



@NgModule({
	declarations: [],
	imports: [
	CommonModule,
	MatTableModule,
	MatSortModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	],
	exports:[
	MatTableModule,
	MatSortModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	]
})
export class MaterialModule { }
