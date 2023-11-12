import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateEducationPageDto {
    @IsOptional()
    @ApiProperty({required: false, example: 'images/1.png'})
    bannerImageUrl: string;

    @IsOptional()
    @ApiProperty({required: false, example: 'ACADEMICS'})
    bannerTitle: string;

    @IsOptional()
    @ApiProperty({required: false, example: 'Overview'})
    overviewTitle: string;

    @IsOptional()
    @ApiProperty({required: false, example: [
        {
            title: "",
            description: "At Green Hills Academy, we offer an international education from Nursery through Grade 12. We develop our learners into principled, lifelong learners and internationally-minded global citizens who contribute to creating a more peaceful and sustainable world. We also instill in our learners the ability to think critically and independently, act empathically, ethically and courageously, and manage their own learning and lives."
        },
        {
            title: "",
            description: "Our educational program is academically challenging, inquiry-based and learner-centered. In addition to providing an excellent academic program, we help our learners develop essential 21st century skills such as research, critical thinking, communication, collaboration and social skills. We connect learning to real life and help learners develop problem solving and self management skills."
        },
        {
            title: "",
            description: "Our International Baccalaureate Primary Years, Middle Years and Diploma Programmes offer challenging and engaging learning experiences. Upon graduation from Green Hills Academy with an International Baccalaureate Diploma, our learners gain admission to and excel in excellent universities around the world."
        },
        {
            title: "English and French/English Programs and Other Languages",
            description: "We offer an English program and a French/English dual language immersion program from Nursery through Grade 8. In the English program all subjects are taught in English, except other languages. In the French/English (50/50) program, we teach core subjects in English and French. In our French/English program, learners develop proficiency in English and French. We also offer German, Mandarin and Kinyarwanda. We are committed to helping our learners develop language proficiency in more than one language."
        }

    ]})
    overviewDescription: {title?: string, description: string}[];

    @IsOptional()
    @ApiProperty({required: false, example: {
        title: "Learner Profile",
        description: "Informed by the IB mission to develop inquiring, knowledgeable and caring young people who help to create a better and more peaceful world through intercultural understanding and respect, the IB programmes foster a distinctive set of attributes. These qualities—embodied in the IB learner profile—prepare IB learners to make exceptional contributions at school and in their communities outside of the classroom.",
        learningItems: [
            "An inquirer who actively enjoys learning.",
            "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
            "An inquirer who actively enjoys learning.",
            "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
            "An inquirer who actively enjoys learning.",
            "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
            "An inquirer who actively enjoys learning.",
            "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
        ],
       photosUrl: [
        "images/3.png",
        "images/4.png"
       ] 
    }})
    leanerProfile: {title: string, description: string, learningItems: string[], photosUrl: string[]}

    @IsOptional()
    @ApiProperty({required: false, example: {
        title: "School Hours",
        schedules: {
            monday: [
            {
                schedule: "Classes",
                startTime: "7:30 AM",
                endTime: "3:30 PM"
            },
            {
                schedule: "After School Programs",
                startTime: "3:45 PM",
                endTime: "4:45 PM"
            },
            {
                schedule: "Academic Support and Enrichment Program",
                startTime: "5:00 PM",
                endTime: "7:00 PM"
            }
        ],
        tuesday: [
            {
                schedule: "Classes",
                startTime: "7:30 AM",
                endTime: "3:30 PM"
            },
            {
                schedule: "After School Programs",
                startTime: "3:45 PM",
                endTime: "4:45 PM"
            },
            {
                schedule: "Academic Support and Enrichment Program",
                startTime: "5:00 PM",
                endTime: "7:00 PM"
            }
        ],
        wednesday: [
            {
                schedule: "Classes",
                startTime: "7:30 AM",
                endTime: "3:30 PM"
            },
            {
                schedule: "After School Programs",
                startTime: "3:45 PM",
                endTime: "4:45 PM"
            },
            {
                schedule: "Academic Support and Enrichment Program",
                startTime: "5:00 PM",
                endTime: "7:00 PM"
            }
        ],
        thursday: [
            {
                schedule: "Classes",
                startTime: "7:30 AM",
                endTime: "3:30 PM"
            },
            {
                schedule: "After School Programs",
                startTime: "3:45 PM",
                endTime: "4:45 PM"
            },
            {
                schedule: "Academic Support and Enrichment Program",
                startTime: "5:00 PM",
                endTime: "7:00 PM"
            }
        ],
        friday: [
            {
                schedule: "Classes",
                startTime: "7:30 AM",
                endTime: "3:30 PM"
            },
            {
                schedule: "After School Programs",
                startTime: "3:45 PM",
                endTime: "4:45 PM"
            },
            {
                schedule: "Academic Support and Enrichment Program",
                startTime: "5:00 PM",
                endTime: "7:00 PM"
            }
        ]
        }
    }})
    timeTable: {title: string, schedules: any}
}