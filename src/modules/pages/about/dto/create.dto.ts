import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAboutDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required: true, example: "Green Hills Academy At Glimpse"})
    title: string

    @IsNotEmpty()
    @ApiProperty({required: true, example: 
        [
            "/images/4.JPG",
            "/images/1.JPG",
            "/images/3.JPG",
            "/images/2.JPG",
            "/images/8.JPG",
            "/images/9.JPG",
          ]
    })
    sliderPhotos: string[]

    @IsNotEmpty()
    @ApiProperty({required: true, example: {
        title: "WHO WE ARE",
        description: "Green Hills Academy is authorized by the International Baccalaureate (IB) organization to offer the Primary Years Programme for learners in Nursery 1 to Grade 5, the Middle Years Programme for learners in Grades 6 to 10 and the Diploma Programme for learners in Grades 11 and 12 . IB World School shares a common philosophy and commitment to providing a high quality, challenging, international education that prepares learners for further study in university and fulfilling lives. For further information about the IB and its programmes, visit www.ibo.org.",
        videoUrl: "https://www.youtube.com/watch?v=wsNLaXRCxog&t",
        photoUrl: "/images/1.JPG"
    }})
    whoWeAre: {title: string, description: string, videoUrl?: string, photoUrl: string}

    @IsNotEmpty()
    @ApiProperty({required: true, example: {
        title: "WELCOME TO GREEN HILLS ACADEMY",
        professorName: "Daniel Holliger, PHD",
        professorPosition: "Head of School(He/Him/His)",
        professorPhotoUrl: "/images/2.png",
        note: "It is a great pleasure to welcome you to Green Hills Academy (GHA), the only International Baccalaureate World School and LabelFrancÉducation school in Rwanda. At GHA, learners excel academically and personally in a safe, caring and vibrant learning community. We create energizing, engaging and empowering learning experiences that foster a love for learning and prepare learners for the future in a continuously changing world. Preparing learners for the uncertainties of our future world is a challenge that we embrace at GHA by developing critical thinking skills, creativity, emotional intelligence, self-confidence, resilience and collaboration to solve real world problems.",
        readMoreSlug: ""
    }})
    welcomeNote: {
        title: string, 
        professorName?: string, 
        professorPosition?: string, 
        professorPhotoUrl?: string,
        note: string,
        readMoreSlug?: string
    }

    @IsNotEmpty()
    @ApiProperty({required: true, example: "/images/12.png"})
    sectionsBackgroundImageSrc: string

    @IsOptional()
    @ApiProperty({required: true, example: [
        {
            iconSrc: "icons/icon-1.png",
            title: "Learners life",
            viewMoreSlug: "",
            viewMoreLabel: "View More"
        },
        {
            iconSrc: "icons/icon-2.png",
            title: "Leadership",
            viewMoreSlug: "",
            viewMoreLabel: "View More"
        },
        {
            iconSrc: "icons/icon-3.png",
            title: "Facilities",
            viewMoreSlug: "",
            viewMoreLabel: "View More"
        },
        {
            iconSrc: "icons/icon-4.png",
            title: "Accreditation",
            viewMoreSlug: "",
            viewMoreLabel: "View More"
        },
        
    ]})
    sections: {iconSrc?: string, title?: string, viewMoreSlug?: string, viewMoreLabel: string}

    @IsNotEmpty()
    @ApiProperty({required: true, example: 'GREEN HILLS ALUMNI'})
    alumniSectionTitle: string;

    @IsNotEmpty()
    @ApiProperty({required: true, example: 'World wide react'})
    operationalCountriesTitle: string;

    @IsNotEmpty()
    @ApiProperty({required: true, example: [
        "Rwanda", "US", "Canada", "Holland", "China", "Germany", "Kenya"
    ]})
    operationalCountries: string[];

    @IsNotEmpty()
    @ApiProperty({required: true, example: "Prestigious Universities"})
    partnerUniversitiesTitle: string;

    @IsNotEmpty()
    @ApiProperty({required: true, example: [
        "Harvard University",
        "Massachusetts Institute of Technology (MIT)",
        "Stanford University",
        "Dartmouth College",
        "Cornell University",
        "New York University (NYU)",
        "McGill University",
        "University of Rwanda",
        "African Leadership University",
        "Kaiserslautern University"
    ]})
    partnerUniversities: string[];

    @IsNotEmpty()
    @ApiProperty({required: true, example: 'Diverse Achievements'})
    achievementsTitle: string;

    @IsNotEmpty()
    @ApiProperty({required: true, example: [
       "Technology Innovators", 
       "Media Pioneers",
       "Legal Experts",
       "Entrepreneurs",
       "Medical Professionals",
       "Creative Artists",
       "Public Service Leaders"
    ]})
    achievements: string[];
    
}