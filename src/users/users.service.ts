import { Injectable } from "@nestjs/common";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", password: "hashed_password" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", password: "hashed_password" },

  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
  
}