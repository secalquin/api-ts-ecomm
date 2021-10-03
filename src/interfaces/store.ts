import ILocation from "./location";

export default interface IStore {
  name: string;
  location: ILocation;
  created_at: string;
  updated_at: string;
}
