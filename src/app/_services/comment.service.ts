import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Comment } from '../_models/comment.model'
import { map } from 'rxjs/operators';
import { environment} from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CommentService {

	base_URL = environment.API_URL;
	// base_URL = 'http://localhost:5000/api';
	articles= [];
	httpHeaders = new HttpHeaders ({
		'Content-Type': 'application/json',
	});

	constructor(
		private http: HttpClient,
		) { }

	createComment(comment:Comment): Observable<any> {
		
		const url = `${this.base_URL}/comment/`;
		return this.http.post<any>(url, comment, {headers: this.httpHeaders})
		.pipe(map((data: any) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));


	}

	getAllComments(){
		
		const url = `${this.base_URL}/commentlist/`;
		return this.http.get<any>(url, {headers: this.httpHeaders} )
		.pipe(map((data) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));
	}


	getAllBlogPostComments(post_id){
		
		const url = `${this.base_URL}/commentlist/?post_id=${post_id}`;
		return this.http.get<any>(url, {headers: this.httpHeaders} )
		.pipe(map((data) => {
			const objectData = JSON.parse(data);
			return objectData;
		}));
	}

	getComment(comment_id): Observable<any>{

		const url = `${this.base_URL}/comment/?comment_id=${comment_id}`;
		return this.http.get<any>(url, {headers: this.httpHeaders});
	}


	updateComment(comment_id: string, comment): Observable<any>{

		const url = `${this.base_URL}/comment/?comment_id=${comment_id}`;
		return this.http.put<any>(url,comment, {headers: this.httpHeaders})
		.pipe(map((data: any) =>{
			const objectData = JSON.parse(data);
			return objectData;		
		}));
	}

	deleteComment(comment_id): Observable<any>{

		const url = `${this.base_URL}/comment/?comment_id=${comment_id}`;
		return this.http.delete<any>(url, {headers: this.httpHeaders})
		.pipe(map((data: any) => {
			const objectData = JSON.parse(data);
			return objectData;		
		}));

	}
}
