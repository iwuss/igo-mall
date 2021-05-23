import { JwtAuthService } from './jwt-auth.service';
import { JwtService } from '@nestjs/jwt';
import { Controller, UseGuards, Get, Post, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('')
export class JwtAuthController {
  JwtAuthService: any;
  constructor(private readonly jwtAuthService: JwtAuthService) { }
  //使用jwt验证token的端口
  @UseGuards(AuthGuard('jwt'))
  @Post('tokenIn')
  aPost(@Req() req) {
    return req.user;
  }
  @Post('getToken')
  getTokenByUserId(
    @Body() user: any,
  ) {
    return this.jwtAuthService.createToken(user);
  }
}