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
    totalClassesTaken: number;
    classes: string[];
}
