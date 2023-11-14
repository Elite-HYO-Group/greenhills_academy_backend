import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateLearnersLifeDto } from './dto/create.dto';
import { UpdateLearnersLifeDto } from './dto/update.dto';

@Injectable()
export class LearnersLifeService {
    constructor(private prismaService: PrismaService){}

    async create(createLearnersLifeDto: CreateLearnersLifeDto){
        await this.prismaService.learnersLifePage.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

       const data = await this.prismaService.learnersLifePage.create({
            data: {
                ...createLearnersLifeDto,
                isActive: true,
            },
        });
        return data;
    }

    async getLearnersLifePageData(){
        return await this.prismaService.learnersLifePage.findFirst({where: {isActive: true}});
    }

    async update(updateLearnersLifeDto: UpdateLearnersLifeDto){
        const activeLearnersLifePage = await this.prismaService.learnersLifePage.findFirst({where: {isActive: true}});
        if(!activeLearnersLifePage) throw new NotFoundException("No learners life page page found");
        await this.prismaService.learnersLifePage.update({where: {id: activeLearnersLifePage.id}, data: updateLearnersLifeDto})
        return {
            success: true,
            message: 'Learners life page updated successfully'
        }
    }
    
    async deletePage(pageId: string){
        const page = await this.prismaService.learnersLifePage.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.learnersLifePage.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
