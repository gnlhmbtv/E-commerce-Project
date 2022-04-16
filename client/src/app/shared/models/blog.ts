export class Blog {
    id:number
    title:string;
    topic:string;
    description:string;
    publishTime:Date;
    comments:Comment[]=[];
    photoUrl:string;
  }
  