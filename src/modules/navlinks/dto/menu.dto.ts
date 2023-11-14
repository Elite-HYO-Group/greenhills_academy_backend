import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMenuDto {
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
                label: 'Admission',
                link: '/admission'
            },
            {
                label: 'Student experience',
                link: '/student-experience'
            },
            {
                label: 'Alumni',
                link: '/alumni'
            },
            {
                label: 'News & Events',
                link: '/news-events'
            },
            {
                label: 'Calendar',
                link: '/calendar'
            },
            {
                label: 'Contact us',
                link: '/contact-us'
            },
        ],
        buttons: [
            {
                label: 'Apply',
                link: '/apply'
            }
        ]
    }})
    @IsNotEmpty()
    menu:  any
}

export class UpdateMenuDto {
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
                label: 'Admission',
                link: '/admission'
            },
            {
                label: 'Student experience',
                link: '/student-experience'
            },
            {
                label: 'Alumni',
                link: '/alumni'
            },
            {
                label: 'News & Events',
                link: '/news-events'
            },
            {
                label: 'Calendar',
                link: '/calendar'
            },
            {
                label: 'Contact us',
                link: '/contact-us'
            },
        ],
        buttons: [
            {
                label: 'Apply',
                link: '/apply'
            }
        ]
    }})
    @IsOptional()
    menu:  any
}