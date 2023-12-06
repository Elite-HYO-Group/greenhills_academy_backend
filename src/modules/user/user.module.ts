import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/services/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt'; 
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN,
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtStrategy],
  exports: [PassportModule]
})
export class UserModule {}
