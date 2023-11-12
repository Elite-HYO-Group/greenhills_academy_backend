import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateEducationPageDto } from './dto/create.dto';
import { UpdateEducationPageDto } from './dto/update.dto';

@Injectable()
export class EducationService {
    constructor(private prismaService: PrismaService){}

    async create(CreateEducationPageDto: CreateEducationPageDto){
        await this.prismaService.educationPage.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

       const data = await this.prismaService.educationPage.create({
            data: {
                ...CreateEducationPageDto,
                isActive: true,
            },
        });
        return data;
    }

    async getEducationPageData(){
        return await this.prismaService.educationPage.findFirst({where: {isActive: true}});
    }

    async update(updateEducationPageDto: UpdateEducationPageDto){
        const activeEducationPage = await this.prismaService.educationPage.findFirst({where: {isActive: true}});
        if(!activeEducationPage) throw new NotFoundException("No education page found");
        await this.prismaService.educationPage.update({where: {id: activeEducationPage.id}, data: updateEducationPageDto})
        return {
            success: true,
            message: 'Education page updated successfully'
        }
    }
    
    async deletePage(pageId: string){
        const page = await this.prismaService.educationPage.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.educationPage.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
