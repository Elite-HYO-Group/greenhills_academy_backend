import { Module } from '@nestjs/common';
import { RolesGuard } from 'src/common/guard/RolesGuard';

@Module({
    providers: [RolesGuard],
})
export class AuthModule {}
