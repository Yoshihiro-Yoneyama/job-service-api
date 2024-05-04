import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './lib/module/UserModule';
import { TodoModule } from './lib/module/TodoModule';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, TodoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
