import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GoogleArticlesService {

	base_URL = 'http://localhost:5000/api';

	httpHeaders = new HttpHeaders ({
		'Content-Type': 'application/json',
	});

	constructor(
		private http: HttpClient,
		) { }

	getArticles() {
		const url = `${this.base_URL}/bnbnews`;
		return this.http.get<any>(url, {headers: this.httpHeaders})
		.pipe(map((data) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));
	}


}
