import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
    secret: process.env.JWT_SECRET || 'defaultSecretKey',
    signOptions: { expiresIn: '60m' },
  })],

  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],

  controllers: [AuthController],

})

export class AuthModule {}
