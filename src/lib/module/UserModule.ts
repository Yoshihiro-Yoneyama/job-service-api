import { Module } from '@nestjs/common';
import { UserController } from '../../presentation/controller/user/UserController';
import { UserService } from '../../service/user/UserService';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
