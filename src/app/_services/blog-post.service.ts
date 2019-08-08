import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BlogPostService {

	base_URL = 'http://localhost:5000/api';
	// private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
	articles= [];
	httpHeaders = new HttpHeaders ({
		'Content-Type': 'application/json',
	});

	constructor(
		private http: HttpClient,
		) { }

	createBlogPost(blogpost:any): Observable<any> {
		
		const url = `${this.base_URL}/blogpost/`;
		return this.http.post<any>(url, blogpost, {headers: this.httpHeaders})
		.pipe(map((data: any) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));


	}

	getAllBlogPost(){
		
		const url = `${this.base_URL}/blogpostlist`;
		return this.http.get<any>(url, {headers: this.httpHeaders} )
		.pipe(map((data) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));
	}

	getBlogPost(titleLink): Observable<any>{

		const url = `${this.base_URL}/blogpost/?titleLink=${titleLink}`;
		return this.http.get<any>(url, {headers: this.httpHeaders});
	}


	updateBlogPost(titleLink: string, blogpost): Observable<any>{

		const url = `${this.base_URL}/blogpost/?titleLink=${titleLink}`;
		return this.http.put<any>(url,blogpost, {headers: this.httpHeaders})
		.pipe(map((data: any) =>{
			const objectData = JSON.parse(data);
			return objectData;		
		}));
	}

	deleteBlogPost(titleLink): Observable<any>{

		const url = `${this.base_URL}/blogpost/?titleLink=${titleLink}`;
		return this.http.delete<any>(url, {headers: this.httpHeaders})
		.pipe(map((data: any) => {
			const objectData = JSON.parse(data);
			return objectData;		
		}));

	}
}
