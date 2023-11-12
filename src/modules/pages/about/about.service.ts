import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateAboutDto } from './dto/create.dto';
import { UpdateAboutDto } from './dto/updated.dto';

@Injectable()
export class AboutService {
    constructor(private prismaService: PrismaService){}

    async create(createAboutDto: CreateAboutDto){
        await this.prismaService.ladingPage.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

       const data = await this.prismaService.aboutPage.create({
            data: {
                ...createAboutDto,
                isActive: true,
            },
        });
        return data;
    }

    async getAboutPageData(){
        return await this.prismaService.aboutPage.findFirst({where: {isActive: true}});
    }

    async update(updatedAboutDto: UpdateAboutDto){
        const activeAboutPage = await this.prismaService.aboutPage.findFirst({where: {isActive: true}});
        if(!activeAboutPage) throw new NotFoundException("No about page found");
        await this.prismaService.aboutPage.update({where: {id: activeAboutPage.id}, data: updatedAboutDto})
        return {
            success: true,
            message: 'About page updated successfully'
        }
    }
    
    async deletePage(pageId: string){
        const page = await this.prismaService.aboutPage.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.ladingPage.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
