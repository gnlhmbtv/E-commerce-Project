import { IBlog } from "./blog";
import { IProduct } from "./product";

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IProduct[];
}

export interface IPaginationBlog {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IBlog[];
}
