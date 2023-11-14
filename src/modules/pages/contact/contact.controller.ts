import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create.dto';
import { UpdateContactDto } from './dto/update.dto';

@Controller('/api/v1/pages/contact')
@ApiTags('/api/v1/pages/contact')
export class ContactController {
  constructor(private contactService: ContactService){}

  @Post()
  async create(
    @Body() createContactDto: CreateContactDto
  ){
    return this.contactService.create(createContactDto);
  }
  @Get()
  async getHomeInfo(){
    return this.contactService.getContactPageData();
  }
  
  @Put()
  @HttpCode(200)
  async updateContactPage(
    @Body() updateContactDto: UpdateContactDto
  ){
    return this.contactService.update(updateContactDto)
  }

  @Delete("/id")
  @HttpCode(200)
  async deletePage(
    @Param("id") id: string
  ){
    return this.contactService.deletePage(id)
  }
}
