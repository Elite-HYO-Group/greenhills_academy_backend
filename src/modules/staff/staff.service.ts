import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateStaffDto } from './dto/create.dto';

@Injectable()
export class StaffService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.staff.findMany();
  }

  async findOneById(id: string) {
    const staffMember = await this.prismaService.staff.findUnique({
      where: { id },
    });
    return staffMember;
  }

  async findByEmail(email: string) {
    const staffMember = await this.prismaService.staff.findUnique({
      where: { email },
    });
    return staffMember;
  }

  async create(createStaffDto: CreateStaffDto) {
    const existingStaff = await this.findByEmail(createStaffDto.email);
    if (existingStaff) {
      throw new BadRequestException('Staff with this email already exists');
    }
    return await this.prismaService.staff.create({
      data: createStaffDto,
    });
  }

  async update(id: string, updateStaffDto: CreateStaffDto) {
    const existingStaff = await this.findOneById(id);
    if (!existingStaff) {
      throw new NotFoundException('Staff not found');
    }
    return await this.prismaService.staff.update({
      where: { id },
      data: updateStaffDto,
    });
  }

  async remove(id: string) {
    const existingStaff = await this.findOneById(id);
    if (!existingStaff) {
      throw new NotFoundException('Staff not found');
    }
    await this.prismaService.staff.delete({ where: { id } });
  }
}
