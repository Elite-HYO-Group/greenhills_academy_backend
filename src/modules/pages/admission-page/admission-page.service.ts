import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateAdmissionPageDto } from './dto/create.dto';
import { UpdateAdmissionPageDto } from './dto/update.dto';

@Injectable()
export class AdmissionPageService {
    constructor(private prismaService: PrismaService){}

    async create(createAdmissionPageDto: CreateAdmissionPageDto){
        await this.prismaService.admissionPage.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

       const data = await this.prismaService.admissionPage.create({
            data: {
                ...createAdmissionPageDto,
                isActive: true,
            },
        });
        return data;
    }

    async getAdmissionPageData(){
        return await this.prismaService.admissionPage.findFirst({where: {isActive: true}});
    }

    async update(updateAdmissionPageDto: UpdateAdmissionPageDto){
        const activeAdmissionPage = await this.prismaService.admissionPage.findFirst({where: {isActive: true}});
        if(!activeAdmissionPage) throw new NotFoundException("No admission page found");
        await this.prismaService.admissionPage.update({where: {id: activeAdmissionPage.id}, data: updateAdmissionPageDto})
        return {
            success: true,
            message: 'Admission page updated successfully'
        }
    }
    
    async deletePage(pageId: string){
        const page = await this.prismaService.admissionPage.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.admissionPage.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
