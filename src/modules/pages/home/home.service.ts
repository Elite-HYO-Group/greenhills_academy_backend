import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateHomeDto, UpdateHomeDto } from './dto/create.dto';

@Injectable()
export class HomeService {
    constructor(private prismaService: PrismaService){}

    async create(createHomePageDto: CreateHomeDto){
        await this.prismaService.ladingPage.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

       const data = await this.prismaService.ladingPage.create({
            data: {
                ...createHomePageDto,
                isActive: true,
            },
        });
        return data;
    }

    async getHomePageData(){
        return await this.prismaService.ladingPage.findFirst({where: {isActive: true}});
    }

    async update(updateHomeDto: UpdateHomeDto){
        const activeHomePage = await this.prismaService.ladingPage.findFirst({where: {isActive: true}});
        if(!activeHomePage) throw new NotFoundException("No landing page found");
        await this.prismaService.ladingPage.update({where: {id: activeHomePage.id}, data: updateHomeDto})
        return {
            success: true,
            message: 'Home page updated successfully'
        }
    }
    
    async deletePage(pageId: string){
        const page = await this.prismaService.ladingPage.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.ladingPage.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
