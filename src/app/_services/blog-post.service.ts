import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment} from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class BlogPostService {

	base_URL;
	// base_URL = 'http://localhost:5000/api';
	// private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
	articles= [];
	httpHeaders = new HttpHeaders ({
		'Content-Type': 'application/json',
	});

	constructor(
		private http: HttpClient,
		) 
	{this.base_URL = environment.API_URL;}

	createBlogPost(blogpost:any): Observable<any> {
		
		const url = `${this.base_URL}/blogpost`;
		return this.http.post<any>(url, blogpost, {headers: this.httpHeaders})
		.pipe(map((data: any) => {
			const objectData = (data);
			return objectData;
		}));


	}

	getAllBlogPost(){
		
		const url = `${this.base_URL}/blogpostlist`;
		return this.http.get<any>(url, {headers: this.httpHeaders} )
		.pipe(map((data) => {
			const objectData = (data);
			return objectData;
		}));
	}

	getBlogPost(id): Observable<any>{

		const url = `${this.base_URL}/blogpost?id=${id}`;
		return this.http.get<any>(url, {headers: this.httpHeaders});
	}


	updateBlogPost(id: string, blogpost): Observable<any>{

		const url = `${this.base_URL}/blogpost?id=${id}`;
		return this.http.put<any>(url,blogpost, {headers: this.httpHeaders})
		.pipe(map((data: any) =>{
			const objectData = (data);
			return objectData;		
		}));
	}

	deleteBlogPost(id): Observable<any>{

		const url = `${this.base_URL}/blogpost?id=${id}`;
		return this.http.delete<any>(url, {headers: this.httpHeaders})
		.pipe(map((data: any) => {
			const objectData = (data);
			return objectData;		
		}));

	}
}
