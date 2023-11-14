import { Body, Controller, Param, Post, Get, Put, Delete } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AddNumberSectionDto } from './dto/create.dto';
import { UpdateNumberSectionDto } from './dto/update.dto';

@Controller('/api/v1/numbers')
@ApiTags('/api/v1/numbers')
export class NumbersController {
    constructor(private numbersService: NumbersService){}

    @Post()
    async addNumbers(
        @Body() dto: AddNumberSectionDto
    ){
        return this.numbersService.addNumberSection(dto);
    }

    @Get('')
    async getAll(){
        return this.numbersService.getAll();
    }

    @Get('/:id')
    @ApiParam({name: 'id'})
    async getOneById(
        @Param('id') id: string
    ){
        return this.numbersService.getOneById(id);
    }

    @Get('slug/:slug')
    @ApiParam({name: 'slug'})
    async getOneBySlug(
        @Param('slug') slug: string
    ){
        return this.numbersService.getOneBySlug(slug);
    }

    @Put('/:id')
    @ApiParam({name: 'id'})
    async updateOneById(
        @Param('id') id: string,
        @Body() dto: UpdateNumberSectionDto
    ){
        return this.numbersService.updateOneById(id, dto);
    }

    @Put('slug/:slug')
    @ApiParam({name: 'slug'})
    async updateOneBySlug(
        @Param('slug') slug: string,
        @Body() dto: UpdateNumberSectionDto
    ){
        return this.numbersService.updateOneBySlug(slug, dto);
    }

    @Delete('/:id')
    @ApiParam({name: 'id'})
    async deleteOneById(
        @Param('id') id: string,
    ){
        return this.numbersService.deleteOneById(id);
    }

    @Delete('slug/:slug')
    @ApiParam({name: 'slug'})
    async deleteOneBySlug(
        @Param('slug') slug: string,
    ){
        return this.numbersService.deleteOneBySlug(slug);
    }

   

}
