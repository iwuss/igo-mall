import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';

@Module({
  imports: [JwtAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
