import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateUserDto } from './dto/create.dto';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    async findAll() {
        return await this.prismaService.user.findMany();
    }

    async findOneById(id: string) {
        const user = await this.prismaService.user.findUnique({
            where: { id },
        });
        return user;
    }

    async findByEmail(email: string) {
        const user = await this.prismaService.user.findUnique({
            where: { email },
        });
        return user;
    }

    async create(createUserDto: CreateUserDto) {
        const existingUser = await this.findByEmail(createUserDto.email);
        if (existingUser) {
            throw new BadRequestException('User with this email already exists');
        }
        return await this.prismaService.user.create({ data: createUserDto });
    }

    async update(id: string, updateUserDto: CreateUserDto) {
        const existingUser = await this.findOneById(id);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }
        return await this.prismaService.user.update({
            where: { id },
            data: updateUserDto,
        });
    }

    async remove(id: string) {
        const existingUser = await this.findOneById(id);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }
        await this.prismaService.user.delete({ where: { id } });
    }

    async getRoleForUser(userId: string) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            include: {
                role: true, 
            },
        });

        if (!user) {
            return null; 
        }

        return user.role; 
    }

}
