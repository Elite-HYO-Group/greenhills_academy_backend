import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.dto';
import { ApiTags } from '@nestjs/swagger';
import { sign } from './../../../node_modules/@types/jsonwebtoken/index.d';
import { SignInDto } from './dto/signIn.dto';

@Controller('/api/v1/users')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }
    const user = await this.userService.create(createUserDto);
    return user;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    const existingUser = await this.userService.findOneById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    const updatedUser = await this.userService.update(id, updateUserDto);
    return updatedUser;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const existingUser = await this.userService.findOneById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    await this.userService.remove(id);
    return { message: 'User deleted successfully' };
  }

  @Post('/signin')
  async signin(@Body() signInDto: SignInDto) {
    return await this.userService.signIn(signInDto);
  }
}
