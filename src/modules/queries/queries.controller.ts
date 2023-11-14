import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { QueriesService } from './queries.service';
import { CreateQueryDto } from './dto/create.dto';

@ApiTags('queries')
@Controller('queries')
export class QueriesController {
    constructor(private queriesService: QueriesService){}

    @Post()
    async create(
        @Body() createDto: CreateQueryDto
    ){
        return this.queriesService.addQuery(createDto)
    }

    @Get()
    async getAll(){
        return this.queriesService.getAll();
    } 

    @Get('/:id')
    @ApiParam({name: 'id'})
    async getById(
        @Param('id') id: string
    ){
        return this.queriesService.getOne(id)
    }

    @Get('/name/:name')
    @ApiParam({name: 'name'})
    async getByName(
        @Param('name') name: string
    ){
        return this.queriesService.getByName(name)
    }

    @Get('/email/:email')
    @ApiParam({name: 'email'})
    async getByEmail(
        @Param('email') email: string
    ){
        return this.queriesService.getByEmail(email)
    }

    @Get('/reply-status/:status')
    @ApiParam({name: 'status'})
    async getByReplyStatus(
        @Param('status') status: boolean
    ){
        return this.queriesService.getByRepliedStatus(status)
    }

    @Put('/set-replied/:id')
    @ApiParam({name: 'id'})
    async setReplied(
        @Param('id') id: string
    ){
        return this.queriesService.setReplied(id)
    }

    @Delete('/:id')
    @ApiParam({name: 'id'})
    async delete(
        @Param('id') id: string
    ){
        return this.queriesService.deleteQuery(id)
    }
}
