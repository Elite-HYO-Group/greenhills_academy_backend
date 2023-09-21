import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, BadRequestException, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/common/guard/RolesGuard';
import { Roles } from 'src/common/decorator/role.decorator';

@Controller('/api/v1/roles')
@ApiTags('role')
// @UseGuards(RolesGuard)

export class RoleController {
    constructor(private roleService: RoleService) {}

    @Get()
    async findAll() {
        const roles = await this.roleService.findAll();
        return roles;
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        const role = await this.roleService.findOneById(id);
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        return role;
    }

    @Post()
    async create(@Body() createRoleDto: CreateRoleDto) {
        const existingRole = await this.roleService.findByName(createRoleDto.name);
        if (existingRole) {
            throw new BadRequestException('Role with this name already exists');
        }
        const role = await this.roleService.create(createRoleDto);
        return role;
    }

    @Put('/:id')
    // @Roles('ADMIN')
    async update(@Param('id') id: string, @Body() updateRoleDto: CreateRoleDto) {
        const existingRole = await this.roleService.findOneById(id);
        if (!existingRole) {
            throw new NotFoundException('Role not found');
        }
        const updatedRole = await this.roleService.update(id, updateRoleDto);
        return updatedRole;
    }

    @Delete('/:id')
    @Roles('ADMIN')
    async remove(@Param('id') id: string) {
        const existingRole = await this.roleService.findOneById(id);
        if (!existingRole) {
            throw new NotFoundException('Role not found');
        }
        await this.roleService.remove(id);
        return { message: 'Role deleted successfully' };
    }
}
