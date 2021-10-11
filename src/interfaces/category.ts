import IProduct from "./product";

export default interface ICategory {
  name?: string;
  products?: IProduct[];
}
