// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { ExtractJwt, Strategy } from "passport-jwt";
// import { AuthService } from "../auth.service";

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//     constructor(private authService: AuthService) {
//         super({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             ignoreExpiration: false,
//             secretOrKey: process.env.JWT_SECRET || 'defaultSecretKey',
//         });
//     }
//     async validate(payload: any) {
//         const user = await this.authService.validateUser(payload.email, null);
//         if (!user) {
//             throw new Error('Unauthorized');
//         }
//         return user;
//     }
// }