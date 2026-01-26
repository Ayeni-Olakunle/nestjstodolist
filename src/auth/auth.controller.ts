import { Controller, Body, Post, HttpCode, HttpStatus,  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BaseUserDto } from 'src/users/base-user.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
}
