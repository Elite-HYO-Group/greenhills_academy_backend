import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateHomeDto{
    @ApiProperty({required: true})
    @IsNotEmpty()
    mission: string;

    @ApiProperty({required: true, example: [
            "Integrity",
            "Intellectual",
            "Curiosity"
    ]})
    @IsNotEmpty()
    coreValues: string[];

    @ApiProperty({required: true})
    @IsNotEmpty()
    uniquenessTitle: string;
    
    @ApiProperty({required: true, example:
     [
        {
            title: "Internationally Accredited ",
            content: "We are the only IB world school, Cognia accredited, Round square school, and Label France education in Rwanda ",
            imageSrc: "/images/ch3.jpg"
          },
          {
            title: "Student Leadership ",
            content: "Strong student leadership through our school wide assemblies, active student council, and perfect body.",
            imageSrc: "/images/ch2.png"
          },
          {
            title: "Our Arts",
            content: "We have a rich arts program with:African Dance, Crafts,  Percussion Music, Kinyarwada for Beginners,School Choir",
            imageSrc: "/images/ch1.png"
          },
          {
            title: "Our Language",
            content: "We offer English,French, Kinyarwanda, German, and Mandarin languages",
            imageSrc: "/images/studentimage.jpg"
          },
          {
            title: "Our Sports Teams",
            content: "Table Tennis, Basketball, Badminton,Aerobics, Football, Traditional Dance, Karate, Volleyball or Swimming",
            imageSrc: "/images/studentimage1.jpg"
          },
          {
            title: "Learners Life",
            content: "Our rich after school life offers various activities and clubs that allow students to explore interests and develop talents",
            imageSrc: "/images/studentimage2.jpg"
          }
     ]
    })
    @IsNotEmpty()
    uniqueness: {title: string, content: string, imageSrc: string}[];

    @ApiProperty({required: true, example: {
            learners: 2050,
            nationalities: 60,
            courses: 80,
            educators: 180
    }})
    @IsNotEmpty()
    numbers: {learners: number, nationalities: number, courses: number, educators: string}

    @ApiProperty({required: true, example: {
            label1: "CONNECT WITH GREENHILLS",
            label2: "#Greenhillsacademy",
            label3: "Let's stay in touch"
    }})
    @IsNotEmpty()
    footer: {label1: string, label2: string, label3: string}
}


export class UpdateHomeDto {
    @ApiProperty({ required: false })
    @IsOptional()
    mission?: string;

    @ApiProperty({ required: false, example: ["Integrity", "Intellectual", "Curiosity"] })
    @IsOptional()
    coreValues?: string[];

    @ApiProperty({ required: false })
    @IsOptional()
    uniquenessTitle?: string;

    @ApiProperty({
        required: false,
        example: [
            {
                title: "Internationally Accredited ",
                content: "We are the only IB world school, Cognia accredited, Round square school, and Label France education in Rwanda ",
                imageSrc: "/images/ch3.jpg"
              },
              {
                title: "Student Leadership ",
                content: "Strong student leadership through our school wide assemblies, active student council, and perfect body.",
                imageSrc: "/images/ch2.png"
              },
              {
                title: "Our Arts",
                content: "We have a rich arts program with:African Dance, Crafts,  Percussion Music, Kinyarwada for Beginners,School Choir",
                imageSrc: "/images/ch1.png"
              },
              {
                title: "Our Language",
                content: "We offer English,French, Kinyarwanda, German, and Mandarin languages",
                imageSrc: "/images/studentimage.jpg"
              },
              {
                title: "Our Sports Teams",
                content: "Table Tennis, Basketball, Badminton,Aerobics, Football, Traditional Dance, Karate, Volleyball or Swimming",
                imageSrc: "/images/studentimage1.jpg"
              },
              {
                title: "Learners Life",
                content: "Our rich after school life offers various activities and clubs that allow students to explore interests and develop talents",
                imageSrc: "/images/studentimage2.jpg"
              }
        ]
    })
    @IsOptional()
    uniqueness?: { title: string, content: string, imageSrc: string }[];

    @ApiProperty({
        required: false,
        example: {
            learners: 2050,
            nationalities: 60,
            courses: 80,
            educators: 180
        }
    })
    @IsOptional()
    numbers?: { learners: number, nationalities: number, courses: number, educators: string };

    @ApiProperty({
        required: false,
        example: {
            label1: "CONNECT WITH GREENHILLS",
            label2: "#Greenhillsacademy",
            label3: "Let's stay in touch"
        }
    })
    @IsOptional()
    footer?: { label1: string, label2: string, label3: string };
}