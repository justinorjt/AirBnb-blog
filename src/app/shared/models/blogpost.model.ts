export class BlogPost{
	constructor(
		public header?:string,
		public subHeader?:string,
		public author?:string,
		public image?:any[],
		public content?:string,
		public comments?:Comment[],
		public publishDate?:string,
		public views?:number,
		public hashtags?:string[],
		public category?:string,
		){}
}

export class Comment{
	constructor(
		public author?:string,
		public content?:string,
		public publishDate?:string,
		){}
}