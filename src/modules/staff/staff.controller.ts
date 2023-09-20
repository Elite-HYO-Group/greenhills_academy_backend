import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { StaffService } from './staff.service'; 
import { ApiTags } from '@nestjs/swagger';
import { CreateStaffDto } from './dto/create.dto';

@Controller('/api/v1/staff')
@ApiTags('staff') 
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Get()
  async findAll() {
    const staffMembers = await this.staffService.findAll();
    return staffMembers;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const staffMember = await this.staffService.findOneById(id);
    if (!staffMember) {
      throw new NotFoundException('Staff member not found');
    }
    return staffMember;
  }

  @Post()
  async create(@Body() createStaffDto: CreateStaffDto) {
    const existingStaff = await this.staffService.create(createStaffDto);
    return existingStaff;
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateStaffDto: CreateStaffDto,
  ) {
    const updatedStaff = await this.staffService.update(id, updateStaffDto);
    return updatedStaff;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.staffService.remove(id);
    return { message: 'Staff member deleted successfully' };
  }
}
