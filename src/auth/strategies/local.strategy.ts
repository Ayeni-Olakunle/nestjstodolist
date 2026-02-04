// import { Strategy } from "passport-jwt";
// import { PassportStrategy } from "@nestjs/passport";
// import { Injectable } from "@nestjs/common";
// import { ExtractJwt } from "passport-jwt";
// import { AuthService } from "../auth.service";

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
//     constructor(private authService: AuthService) {
//         super({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             ignoreExpiration: false,
//             secretOrKey: process.env.JWT_SECRET || 'defaultSecretKey',
//         });
//     }

//     async validate(username: string, password: string): Promise<any> {
//         const user = await this.authService.validateUser(username, password);
//         if (!user) {
//             throw new Error('Unauthorized');
//         }
//         return user;
//     }
// }