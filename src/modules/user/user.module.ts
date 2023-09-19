import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/services/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt'; 

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.EXPIRES_IN },
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService],
})
export class UserModule {}
