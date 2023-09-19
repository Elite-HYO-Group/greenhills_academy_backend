import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { PrismaService } from 'src/services/prisma.service';
import { UserService } from './../user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: 'md001msmdm',
        signOptions: { expiresIn: 3600 },
      }),
    }),
  ],
  controllers: [RoleController],
  providers: [RoleService, PrismaService, UserService],
})
export class RoleModule {}
