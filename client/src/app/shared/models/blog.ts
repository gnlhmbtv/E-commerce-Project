export interface IBlog {
    id:number
    title:string;
    topic:string;
    description:string;
    publishTime:Date;
    photoUrl:string;
  }

  export class Blog{
    comments:Comment[]=[];
  }
  
  