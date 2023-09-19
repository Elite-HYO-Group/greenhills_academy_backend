import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateRoleDto } from './dto/create.dto';

@Injectable()
export class RoleService {
    constructor(private prismaService: PrismaService) {}

    async findAll() {
        return await this.prismaService.role.findMany();
    }

    async findOneById(id: string) {
        const role = await this.prismaService.role.findUnique({
            where: { id },
        });
        return role;
    }

    async findByName(name: string) {
        const role = await this.prismaService.role.findUnique({
            where: { name },
        });
        return role;
    }

    async create(createRoleDto: CreateRoleDto) {
        return await this.prismaService.role.create({ data: createRoleDto });
    }

    async update(id: string, updateRoleDto: CreateRoleDto) {
        const existingRole = await this.findOneById(id);
        if (!existingRole) {
            throw new NotFoundException('Role not found');
        }
        return await this.prismaService.role.update({
            where: { id },
            data: updateRoleDto,
        });
    }

    async remove(id: string) {
        const existingRole = await this.findOneById(id);
        if (!existingRole) {
            throw new NotFoundException('Role not found');
        }
        await this.prismaService.role.delete({ where: { id } });
    }
}
