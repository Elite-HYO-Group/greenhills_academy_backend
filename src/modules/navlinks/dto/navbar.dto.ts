import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateNavbarDto {
    @ApiProperty({required: true, example: {
        links: [
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
        ],
        buttons: [
            {
                label: 'Apply',
                link: '/apply'
            }
        ]
    }})
    @IsNotEmpty()
    navbar:  any
}

export class UpdateNavbarDto {
    @ApiProperty({required: false, example: {
        links: [
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
        ],
        buttons: [
            {
                label: 'Apply',
                link: '/apply'
            }
        ]
    }})
    @IsOptional()
    navbar:  any
}