export interface IAdmin {
  _id: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  available: boolean;
}