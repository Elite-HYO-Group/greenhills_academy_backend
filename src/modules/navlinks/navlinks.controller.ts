import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { NavLinksServices } from './navlinks.service';
import { CreateNavbarDto } from './dto/navbar.dto';
import { CreateMenuDto } from './dto/menu.dto';
import { CreateFooterLinksDto } from './dto/footer-links.dto';
import { CreateFooterAddressesDto } from './dto/footer-addresses.dto';
import { CreateSocialsDto } from './dto/socials';

@Controller('api/v1/navlinks')
@ApiTags('api/v1/navlinks')
export class NavlinksController {
    constructor(private navLinksService: NavLinksServices){}

    @Post('')
    async Initialize(){
        return this.navLinksService.initializeLinks();
    }

    @Patch('/navbar-links')
    async createNavbarLinks(
        @Body() dto: CreateNavbarDto
    ){
        return this.navLinksService.createNavbarLinks(dto);
    }

    @Patch('/menu-links')
    async createMenuLinks(
        @Body() dto: CreateMenuDto
    ){
        return this.navLinksService.createMenuLinks(dto);
    }

    @Patch('/footer-links')
    async createFooterLinks(
        @Body() dto: CreateFooterLinksDto
    ){
        return this.navLinksService.createFooterLinksLinks(dto);
    }

    @Patch('/footer-addresses')
    async createFooterAddresses(
        @Body() dto: CreateFooterAddressesDto
    ){
        return this.navLinksService.createFooterAddressLinks(dto);
    }

    @Patch('/socials')
    async createSocials(
        @Body() dto: CreateSocialsDto
    ){
        return this.navLinksService.createSocialsLinks(dto);
    }

    @Get()
    async getPage(){
        return this.navLinksService.getNavLinks();
    }

    @Delete('/:id')
    @ApiParam({name: 'id'})
    async deletePage(
        @Param('id') id: string
    ){
        return this.navLinksService.deletePage(id);
    }
}
