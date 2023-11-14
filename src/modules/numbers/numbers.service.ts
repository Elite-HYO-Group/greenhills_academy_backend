import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { AddNumberSectionDto } from './dto/create.dto';
import { UpdateNumberSectionDto } from './dto/update.dto';

@Injectable()
export class NumbersService {
    constructor(private prismaService: PrismaService){}

    async addNumberSection(addNumberSectionDto: AddNumberSectionDto){
        const { sectionSlug } = addNumberSectionDto;
        try{
            const slugExists = await this.prismaService.numbers.findUnique({where: {sectionSlug}});
            if(slugExists) throw new BadRequestException("Slug ["+sectionSlug+"] already exists")
            const newNumber = await this.prismaService.numbers.create({data: addNumberSectionDto});
            return newNumber;
        }
        catch(e){
            throw new BadRequestException("Number not created")
        }
    }

    async getOneById(id: string){
        const section = await this.prismaService.numbers.findUnique({where: {id}});
        if(!section) throw new NotFoundException("Section not found");
        return section;
    }

    async getOneBySlug(slug: string){
        const section = await this.prismaService.numbers.findUnique({where: {sectionSlug: slug}});
        if(!section) throw new NotFoundException("Section not found");
        return section;
    }

    async getAll(){
        return this.prismaService.numbers.findMany();
    }

    async updateOneBySlug(slug: string, updateDto: UpdateNumberSectionDto){
        const slugExists = await this.prismaService.numbers.findUnique({where: {sectionSlug: slug}});
        if(!slugExists) throw new NotFoundException("Numbers with slug ["+slug+"] was not found")
        const results = await this.prismaService.numbers.update({where: {sectionSlug: slug}, data: updateDto});
        if(!results) throw new BadRequestException("Error, Numbers not updated");
        return {
            success: true,
            message: 'Numbers updated successfully'
        }
    }

    async updateOneById(id: string, updateDto: UpdateNumberSectionDto){
        const sectionExists = await this.prismaService.numbers.findUnique({where: {id}});
        if(!sectionExists) throw new BadRequestException("Numbers with id ["+id+"] was not  found")
        const results = await this.prismaService.numbers.update({where: {id}, data: updateDto});
        if(!results) throw new BadRequestException("Error, Numbers not updated");
        return {
            success: true,
            message: 'Numbers updated successfully'
        }
    }

    async deleteOneBySlug(slug: string){
        const slugExists = await this.prismaService.numbers.findUnique({where: {sectionSlug: slug}});
        if(!slugExists) throw new NotFoundException("Numbers with slug ["+slug+"] was not found")
        const results = await this.prismaService.numbers.delete({where: {sectionSlug: slug}});
        if(!results) throw new BadRequestException("Error, Numbers not deleted");
        return {
            success: true,
            message: 'Numbers deleted successfully'
        }
    }

    async deleteOneById(id: string){
        const sectionExists = await this.prismaService.numbers.findUnique({where: {id}});
        if(!sectionExists) throw new BadRequestException("Numbers with id ["+id+"] was not  found")
        const results = await this.prismaService.numbers.delete({where: {id}});
        if(!results) throw new BadRequestException("Error, Numbers not deleted");
        return {
            success: true,
            message: 'Numbers deleted successfully'
        }
    }

}
