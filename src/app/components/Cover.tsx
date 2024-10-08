import banner from "@/assets/courses/page-banner-2.jpg";
import { StaticImageData } from "next/image";

type TCoverProps={
  banner: StaticImageData,
  title:string,
  subTitle:string
}
const Cover = ({ banner, title, subTitle }:TCoverProps) => {
  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative text-center">
        <h3 className="text-2xl lg:text-3xl text-secondary font-medium">
          {title}
        </h3>
        <h4 className="text-xl font-bold text-white">
          Home <span className="text-primary font-medium">|</span> {subTitle}
        </h4>
      </div>
    </div>
  );
};

export default Cover;
