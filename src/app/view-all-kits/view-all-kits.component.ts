import { Component, OnInit } from '@angular/core';
import { KitcollectionService } from 'src/app/_services/kitcollection.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-all-kits',
  templateUrl: './view-all-kits.component.html',
  styleUrls: ['./view-all-kits.component.css']
})
export class ViewAllKitsComponent implements OnInit {

	rawkits:any;
	embedkits = [];

  constructor(
		private kcs: KitcollectionService,
		private sanitizer: DomSanitizer,

  	) { }

  ngOnInit() {
  	this.fetchKits();
  }

  fetchKits(){
		return this.kcs.getKits()
		.subscribe((data) => {
			this.rawkits = data;
			console.log(this.rawkits)

			for  ( let item of this.rawkits){
				const embed = "https://kit.com/embed?url=" + item.link;
				const clean = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
				this.embedkits.push(clean);
			}
		});
	}


}
