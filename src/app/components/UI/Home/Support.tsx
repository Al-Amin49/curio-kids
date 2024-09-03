import { supportData } from "@/app/constants/support";
import Image from "next/image";
import Container from "../Container";

const Support = () => {
  return (
   <Container  className="py-10">
     <div className="grid grid-cols-3 lg:grid-cols-5 place-items-center gap-6 mx-4 lg:mx-0">
      {supportData.map((support) => (
        <div key={support.id}  className="flex">
          <div className="">
            <Image src={support.img} alt="" className="w-20 lg:w-32"/>
            <p className="text-sm lg:text-base text-black font-medium">{support.text}</p>
          </div>
        </div>
      ))}
    </div>
   </Container>
  );
};

export default Support;
