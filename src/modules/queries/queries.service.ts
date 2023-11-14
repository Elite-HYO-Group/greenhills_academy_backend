import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateQueryDto } from './dto/create.dto';

@Injectable()
export class QueriesService {
    constructor(private prismaService: PrismaService){}

    async addQuery(createQueryDto: CreateQueryDto){
        return this.prismaService.queries.create({data: {...createQueryDto, isReplied: false}})
    }

    async getAll(){
        return this.prismaService.queries.findMany();
    }

    async getByRepliedStatus(replyStatus: boolean){
        return this.prismaService.queries.findMany({where: {isReplied: replyStatus}})
    }

    async getOne(id: string){
        console.log(id)
        return this.prismaService.queries.findUnique({where: {id}})
    }

    async getByName(name: string){
        return this.prismaService.queries.findMany({where: {name}})
    }

    async getByEmail(email: string){
        return this.prismaService.queries.findMany({where: {email}});
    }

    async setReplied(id: string){
        try{
            const query = await this.prismaService.queries.findUnique({where: {id}});
            if(!query) throw new NotFoundException("Query with id ["+id+"] not found")
            const affectedRows = await this.prismaService.queries.update({where: {id}, data: {isReplied: true}});
            if(!affectedRows) throw new BadRequestException("Query not updated")
            return {
                success: true,
                message: 'Query set as replied successfully'
            }
        }
        catch(e){
            throw new BadRequestException("Query not updated")
        }
    }

    async deleteQuery(id: string){
        try{
            const query = await this.prismaService.queries.findUnique({where: {id}});
            if(!query) throw new NotFoundException("Query with id ["+id+"] not found")
            await this.prismaService.queries.delete({where: {id}})
            return {
                success: true,
                message: 'Query set as replied successfully'
            }
        }
        catch(e){
            throw new BadRequestException("Query not updated")
        }
    }
}
