import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateNavbarDto } from './dto/navbar.dto';
import { CreateMenuDto } from './dto/menu.dto';
import { CreateFooterLinksDto } from './dto/footer-links.dto';
import { CreateFooterAddressesDto } from './dto/footer-addresses.dto';
import { CreateSocialsDto } from './dto/socials';


@Injectable()
export class NavLinksServices {
    constructor(private prismaService: PrismaService){}

    async initializeLinks(){
        await this.prismaService.navLinks.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });

        const linksPage = await this.prismaService.navLinks.create({data: {isActive: true, navbar: {}, menu: {}, footerAddresses: {}, footerLinks: {}, socials: {}}})
        return linksPage;
    }

    async createNavbarLinks(dto: CreateNavbarDto){
        const linksExists = await this.prismaService.navLinks.findFirst({where: {isActive: true}})
        console.log("links exists")

        if(!linksExists) {
            console.log(linksExists)
            await this.prismaService.navLinks.create({data: {isActive: true}})
            this.createNavbarLinks(dto);
        } // initialized a page

        const newPage = await this.prismaService.navLinks.update({where: {id: linksExists.id}, data: dto})
        return newPage;
    }

    async createMenuLinks(dto: CreateMenuDto){
        const linksExists = await this.prismaService.navLinks.findFirst({where: {isActive: true}})
        if(!linksExists) {
            await this.prismaService.navLinks.create({data: {isActive: true}})
            this.createMenuLinks(dto);
        } // initialized a page

        const newPage = await this.prismaService.navLinks.update({where: {id: linksExists.id}, data: dto})
        return newPage;
    }

    async createFooterLinksLinks(dto: CreateFooterLinksDto){
        const linksExists = await this.prismaService.navLinks.findFirst({where: {isActive: true}})
        if(!linksExists) {
            await this.prismaService.navLinks.create({data: {isActive: true}})
            this.createFooterLinksLinks(dto);
        } // initialized a page

        const newPage = await this.prismaService.navLinks.update({where: {id: linksExists.id}, data: dto})
        return newPage;
    }

    async createFooterAddressLinks(dto: CreateFooterAddressesDto){
        const linksExists = await this.prismaService.navLinks.findFirst({where: {isActive: true}})
        if(!linksExists) {
            await this.prismaService.navLinks.create({data: {isActive: true}})
            this.createFooterAddressLinks(dto);
        } // initialized a page

        const newPage = await this.prismaService.navLinks.update({where: {id: linksExists.id}, data: dto})
        return newPage;
    }

    async createSocialsLinks(dto: CreateSocialsDto){
        const linksExists = await this.prismaService.navLinks.findFirst({where: {isActive: true}})
        if(!linksExists) {
            await this.prismaService.navLinks.create({data: {isActive: true}})
            this.createSocialsLinks(dto);
        } // initialized a page

        const newPage = await this.prismaService.navLinks.update({where: {id: linksExists.id}, data: dto})
        return newPage;
    }


    async getNavLinks(){
    const page = await this.prismaService.navLinks.findFirst({where: {isActive: true}});
    if(!page) throw new NotFoundException("No page found")
    return page;
    }

   
    
    async deletePage(pageId: string){
        const page = await this.prismaService.navLinks.findUnique({where: {id: pageId}});
        if(!page) throw new NotFoundException("Page with id ["+pageId+"] not found");
        await this.prismaService.navLinks.delete({where: {id: pageId}});
        return {
            success: true,
            message: "Page deleted successfully"
        }
    }
}
