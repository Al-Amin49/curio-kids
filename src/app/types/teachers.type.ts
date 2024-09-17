import { StaticImageData } from "next/image";

export type Teacher ={
    _id: string;
    name: string;
    designation: string;
    image: string;
    socialLinks: {
        linkedin: string;
        facebook: string;
        twitter: string;
        instagram: string;
    };
    numberOfClasses: number;
    classesTaught: string[];
    profilePicture:StaticImageData
}
