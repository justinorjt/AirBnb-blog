// export class BlogPost{
// 	constructor(
// 		public header?:string,
// 		public description?:string,
// 		public author?:string,
// 		public image?:any[],
// 		public content?:string,
// 		public comments?:Comment[],
// 		public publishDate?:string,
// 		public views?:number,
// 		public hashtags?:string[],
// 		public category?:string,
// 		){}
// }

export interface Blogpost{
	title: string;
	titleLink:string;
	author:string;
	description:string;
	content:any;
	category:any;
	dateCreated:string;
}

export class Comment{
	constructor(
		public author?:string,
		public content?:string,
		public approved?:boolean,
		public liked?:boolean,
		public reply?:Comment[],
		public publishDate?:string,
		){}
}