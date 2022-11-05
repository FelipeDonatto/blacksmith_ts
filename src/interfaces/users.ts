export interface User {
  username: string;
  classe: string;
  password: string;
  level: number;
}

export interface IUser extends User {
  id: number;
}

export interface UserArr extends IUser {
  orderId: number;
}
