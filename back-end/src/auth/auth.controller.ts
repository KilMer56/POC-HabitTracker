import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local/local-auth.guard';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { AuthService } from './auth.service';
import { Response } from "../interceptors/response.interceptor"

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        let token = await this.authService.login(req.user);

        return {
            message: "Successfuly logged in",
            data: token
        };
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
