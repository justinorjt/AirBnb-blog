import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BlogPostService {

	base_URL = 'http://localhost:5000/api';
	private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
	articles= [];

	constructor(
		private http: HttpClient,
		) { }

	createBlogPost(blogpost:any): Observable<any> {
		const httpHeaders = new HttpHeaders ({
			'Content-Type': 'application/json',
		});
		const url = `${this.base_URL}/add_post`;
		return this.http.post<any>(url, blogpost, {headers: httpHeaders})
		.pipe(map((data: any) => {
			return data;
		}));


	}

	getAllBlogPost(){
		const httpHeaders = new HttpHeaders ({
			'Content-Type': 'application/json',
		});
		const url = `${this.base_URL}/get_posts`;
		return this.http.get<any>(url,{headers: httpHeaders} )
		// .pipe(map((data: any) => {
		// 	return data;
		// }));

	}

	blogPostDetail(){

	}
}
