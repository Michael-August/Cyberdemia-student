import LayoutContextProvider from "@/components/Landing/LayoutContextProvider";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/Landing/banner"));
const Why = dynamic(() => import("@/components/Landing/Why"));
const Values = dynamic(() => import("@/components/Landing/Values"));
const Courses = dynamic(() => import("@/components/Landing/Courses"));
const Trainings = dynamic(() => import("@/components/Landing/Trainings"));
const AwarenessTraining = dynamic(
  () => import("@/components/Landing/Trainings")
);
const SchoolOutreach = dynamic(
  () => import("@/components/Landing/School-outreach")
);
const Instructor = dynamic(() => import("@/components/Landing/Instructor"));
const Testimonials = dynamic(() => import("@/components/Landing/Testimonials"));
const Join = dynamic(() => import("@/components/Landing/Join"));
const FAQs = dynamic(() => import("@/components/Landing/FAQs"));
const NewsAndUpdates = dynamic(() => import("@/components/Landing/News"));
const Footer = dynamic(() => import("@/components/Landing/Footer"));

const Home = () => {
  return (
    <main className="px-4 lg:px-20 lg:mt-20 2xl:px-52 overflow-x-clip">
      <LayoutContextProvider>
        <Banner />
        <Why />
        <Values />
        <Courses />
        <Trainings />
        <AwarenessTraining />
        <SchoolOutreach />
        <Instructor />
        <Testimonials />
        <Join />
        <FAQs />
        <NewsAndUpdates />
        <Footer />
      </LayoutContextProvider>
    </main>
  );
};

export default Home;
