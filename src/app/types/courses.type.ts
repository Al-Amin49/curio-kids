import { StaticImageData } from "next/image";


export type Course = {
    id: number;
    title: string;
    description: string;
    img: StaticImageData;
    price: number;
    age: string;
    time: string;
    seat: number;
    video:string
  };
  