import { User } from "../users/User";

export interface Auth {
  loggedIn: boolean,
  user: User
}