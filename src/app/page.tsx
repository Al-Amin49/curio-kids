import Banner from "./components/UI/Home/Banner";
import PopularCourses from "./components/UI/Home/PopularCourses";
import WhoWeAre from "./components/UI/Home/WhoWeAre";


export default function Home() {
  return (
   <div className="overflow-x-hidden ">
   <Banner/>
   <WhoWeAre/>
   <PopularCourses/>
   </div>
  );
}
