import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateSocialsDto {
    @ApiProperty({required: true, example: [
        {
            label: 'Facebook',
            link: ''
        },
        {
            label: 'Instagram',
            link: ''
        },
        {
            label: 'Youtube',
            link: ''
        },
        {
            label: 'Twitter',
            link: ''
        },
        {
            label: 'Phone number',
            link: ''
        },
    ]})
    @IsNotEmpty()
    socials:  any
}

export class UpdateSocialsDto {
    @ApiProperty({required: false, example: [
        {
            label: 'Facebook',
            link: ''
        },
        {
            label: 'Instagram',
            link: ''
        },
        {
            label: 'Youtube',
            link: ''
        },
        {
            label: 'Twitter',
            link: ''
        },
        {
            label: 'Phone number',
            link: ''
        },
    ]})
    @IsOptional()
    socials:  any
}