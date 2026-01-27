import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: process.env.JWT_SECRET || 'defaultSecretKey',
    signOptions: { expiresIn: '60m' },
  })],
  providers: [AuthService],
  exports: [AuthService],
})

export class AuthModule {}
