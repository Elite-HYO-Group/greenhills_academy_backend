import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateFooterAddressesDto {
    @ApiProperty({required: true, example: [
       {
         type: 'Location',
         label: ' Kigali KG 278 St, Nyarutarama Kigali'
       },
       {
        type: 'Phone',
        label: '+250735832348'
      },
      {
        type:  "Email",
        label: 'info@greenhillsacademy.rw'
      }
    ]})
    @IsNotEmpty()
    footerAddresses:  any
}

export class UpdateFooterAddressesDto {
    @ApiProperty({required: true, example: [
        {
          type: 'Location',
          label: ' Kigali KG 278 St, Nyarutarama Kigali'
        },
        {
         type: 'Phone',
         label: '+250735832348'
       },
       {
         type:  "Email",
         label: 'info@greenhillsacademy.rw'
       }
     ]})
     @IsOptional()
    footerAddresses:  any
}