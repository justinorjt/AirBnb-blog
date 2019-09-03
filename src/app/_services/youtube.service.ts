import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment} from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class YoutubeService {

	base_URL;

	// base_URL = 'http://localhost:5000/api';

	httpHeaders = new HttpHeaders ({
		'Content-Type': 'application/json',
	});
	constructor(
		private http: HttpClient,
		) {  this.base_URL = environment.API_URL }

	getVideos() {
		const url = `${this.base_URL}/youtube`;
		return this.http.get<any>(url, {headers: this.httpHeaders})
		.pipe(map((data) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));
	}
}
