import { Module } from '@nestjs/common';
import { JWT } from '../../config';
import { JwtAuthStrategy } from './jwt.auth.strategy';
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthController } from './jwt-auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({})
@Module({
  imports: [
    JwtModule.register({
      //生成token的key
      secret: JWT.secret,
      // signOption可以在JwtModule设定
      // 或是在createToken时候设定
      signOptions: {
        //token的有效时长
        expiresIn: '2h',
      },
    }),
  ],
  providers: [JwtAuthService, JwtAuthStrategy],
  controllers: [JwtAuthController]
})
export class JwtAuthModule { }