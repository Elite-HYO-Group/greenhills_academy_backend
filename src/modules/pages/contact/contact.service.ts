import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateContactDto } from './dto/create.dto';
import { UpdateContactDto } from './dto/update.dto';

@Injectable()
export class ContactService {
    constructor(private prismaService: PrismaService){}

    async create(createContactDto: CreateContactDto){
        await this.prismaService.contactPage.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

       const data = await this.prismaService.contactPage.create({
            data: {
                ...createContactDto,
                isActive: true,
            },
        });
        return data;
    }

    async getContactPageData(){
        return await this.prismaService.contactPage.findFirst({where: {isActive: true}});
    }

    async update(updateContactDto: UpdateContactDto){
        const activeContactPage = await this.prismaService.contactPage.findFirst({where: {isActive: true}});
        if(!activeContactPage) throw new NotFoundException("No contact page found");
        await this.prismaService.contactPage.update({where: {id: activeContactPage.id}, data: updateContactDto})
        return {
            success: true,
            message: 'Contact page updated successfully'
        }
    }
    
    async deletePage(pageId: string){
        const page = await this.prismaService.contactPage.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.contactPage.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
