import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { User } from "../users/users.entity";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== password) {
        throw new UnauthorizedException('Invalid credentials');
    }
    return { message: 'Sign in successful', userId: user.id , userName: user.name, userEmail: user.email };
  }
}