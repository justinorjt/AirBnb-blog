import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GoogleArticlesService {

	base_URL = 'http://localhost:5000/api';
	articles= [];
	constructor(
		private http: HttpClient,
		) { }

	getArticles() {
		const url = `${this.base_URL}/bnbnews`;
		return this.http.get(url);
	}


}
