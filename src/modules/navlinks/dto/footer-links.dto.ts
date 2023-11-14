import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateFooterLinksDto{
    @ApiProperty({required: true, example: [
        {
            label: 'Home',
            link: '/home'
        },
        {
            label: 'About us',
            link: '/about-us'
        },
        {
            label: 'Education',
            link: '/education'
        },
        {
            label: 'Admission',
            link: '/admission'
        },
        {
            label: 'News & Events',
            link: '/news-events'
        },
        {
            label: 'Contact us',
            link: '/contact-us'
        }
    ]})
    @IsNotEmpty()
    footerLinks:  any
}

export class UpdateFooterLinksDto{
    @ApiProperty({required: false, example: [
        {
            label: 'Home',
            link: '/home'
        },
        {
            label: 'About us',
            link: '/about-us'
        },
        {
            label: 'Education',
            link: '/education'
        },
        {
            label: 'Admission',
            link: '/admission'
        },
        {
            label: 'News & Events',
            link: '/news-events'
        },
        {
            label: 'Contact us',
            link: '/contact-us'
        }
    ]})
    @IsOptional()
    footerLinks:  any
}