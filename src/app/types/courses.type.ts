import { StaticImageData } from "next/image";


export type Course = {
    _id: string;
    title: string;
    description: string;
    img: StaticImageData;
    price: number;
    age: string;
    time: string;
    seat: number;
    video:string,
    status:string
  };
  