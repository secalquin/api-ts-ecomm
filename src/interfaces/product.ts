import IStore from "./store";

export default interface IProduct {
  sku: string;
  price: number;
  stores: IStore[];
  created_at: string;
  updated_at: string;
}
