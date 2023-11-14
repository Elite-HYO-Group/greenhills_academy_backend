import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdmissionPageDto {
    @ApiProperty({required: true, example: "images/1.png"})
    @IsNotEmpty()
    @IsString()
    bannerImageUrl: string

    @ApiProperty({required: true, example: "Wish to learn more? We'll send you a package of information as soon as you complete the form Linked below"})
    @IsNotEmpty()
    @IsString()
    bannerTitle: string

    @ApiProperty({required: true, example: {
        title: "Enrollment Portal",
        description: "Families interested in joining the Green Hills community should contact the Admissions Director to discuss availability of space. If there is space, parents are encouraged to schedule a tour of the campus if they have not previously visited. GHA has an open admissions process and accepts learners throughout the school year if space is available.",
        imageUrls: [],
        formUrl: ''
    }})
    @IsNotEmpty()
    enrollementSection: {title: string, description: string, imageUrls?: string[], formUrl?: string}

    @ApiProperty({required: true, example: {
        title: "Mission Driven Admissions",
        description: "At Green Hills Academy, our mission is to help learners become principled, lifelong learners equipped with the knowledge and skills to excel. In service to our mission, we provide an innovative, inclusive international education for learners from Nursery through Grade 12.",
        imageUrls: [],
        formUrl: ''
    }})
    @IsNotEmpty()
    missionSection: {title: string, description: string, imageUrls?: string[], formUrl?: string}

    @ApiProperty({required: true, example: {
        title: "Inclusion",
        description: "GHA welcomes learners with a diverse range of cultural and educational backgrounds, talents and abilities. The diverse backgrounds of our learners enrich our school community and contribute to a dynamic learning environment in which all learners are celebrated, and challenged and supported to do their personal best.As a welcoming and inclusive community, we expect families to engage fully with the School, supporting both its educational philosophy and community activities. We also value transparent communications and constructive, respectful, personal and professional interactions.",
        imageUrls: [],
        formUrl: ''
    }})
    @IsNotEmpty()
    firstCharacterSection: {title: string, description: string, imageUrls?: string[], formUrl?: string}

    @ApiProperty({required: true, example: {
        title: "Everyone challenged",
        description: "GHA is committed to personalized learning in order to sustain high levels of motivation and optimize our learners' growth and achievement in all areas of development. We personalize learning to help learners realize their full potential, identify and develop interests and talents, and become internationally-minded global citizens.",
        imageUrls: [],
        formUrl: ''
    }})
    @IsNotEmpty()
    secondCharacterSection: {title: string, description: string, imageUrls?: string[], formUrl?: string}

    @ApiProperty({required: true, example: {
        title: "Everyone successful",
        description: "GHA, while inclusive, is also rigorous and challenging. We expect high levels of motivation and perseverance from every learner. When learners’ records suggest that they may not have the disposition to be successful at GHA, we counsel families to choose a different school.",
        imageUrls: [],
        formUrl: ''
    }})
    @IsNotEmpty()
    lastCharacterSection: {title: string, description: string, imageUrls?: string[], formUrl?: string}
    
}