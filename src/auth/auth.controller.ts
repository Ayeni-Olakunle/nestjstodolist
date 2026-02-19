import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/signup.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) { 
    return this.authService.signUp(signUpDto);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async getLoggedInUser(@Req() req: Request) {
    return this.authService.findUserById(req.user['id']);
  }

  @HttpCode(HttpStatus.OK)
  @Get('user')
  async findUserById(@Body('id') id: number) {
    return this.authService.findUserById(id);
  }
  

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Passport will redirect automatically
  }

  // Google callback URL
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request) {
    return req.user; // this contains { access_token, id, email, name }
  }

}
