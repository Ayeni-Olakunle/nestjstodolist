import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string, id: number, email: string, name: string }> {
    const user = await this.usersService.findByEmailWithPassword(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = await this.jwtService.signAsync({ sub: user.id, email: user.email });

    return {
      id: user.id,
      access_token: payload,
      email: user.email,
      name: user.name,
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.usersService.createUser(
      signUpDto.name,
      signUpDto.email,
      signUpDto.password,
    );

    // Optional: return JWT after signup
    const payload = await this.jwtService.signAsync({ sub: user.id, email: user.email });
    return { access_token: payload, id: user.id, email: user.email, name: user.name};
  }

  async findUserById(id: number) {
    return this.usersService.findById(id);
  }


  async validateGoogleUser(profile: { email: string; name: string }) {
  let user = await this.usersService.findByEmail(profile.email);

  if (!user) {
    // Create a new user if it doesn't exist
    user = await this.usersService.createUser(profile.name, profile.email, Math.random().toString(36)); // random password
  }

  // Issue JWT
  const payload = await this.jwtService.signAsync({ sub: user.id, email: user.email });
  return {
    access_token: payload,
    id: user.id,
    email: user.email,
    name: user.name,
  };
}

  
}
