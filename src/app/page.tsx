import Banner from "./components/UI/Home/Banner";
import OurValue from "./components/UI/Home/OurValue";
import PopularCourses from "./components/UI/Home/PopularCourses";
import WhoWeAre from "./components/UI/Home/WhoWeAre";


export default function Home() {
  return (
   <div className="overflow-x-hidden ">
   <Banner/>
   <WhoWeAre/>
   <PopularCourses/>
   <OurValue/>
   </div>
  );
}
