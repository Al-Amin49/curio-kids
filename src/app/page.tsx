import Banner from "./components/UI/Home/Banner";
import OurValue from "./components/UI/Home/OurValue";
import PopularCourses from "./components/UI/Home/PopularCourses";
import Teachers from "./components/UI/Home/Teachers";
import Testimonials from "./components/UI/Home/Testimonials";
import WhoWeAre from "./components/UI/Home/WhoWeAre";


export default function Home() {
  return (
   <div className="overflow-x-hidden ">
   <Banner/>
   <WhoWeAre/>
   <PopularCourses/>
   <OurValue/>
   <Teachers/>
   <Testimonials/>
   </div>
  );
}
