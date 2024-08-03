import dynamic from 'next/dynamic';

import LayoutContextProvider from '@/components/Landing/LayoutContextProvider';
const Banner = dynamic(() => import('@/components/Landing/banner'));
const Why = dynamic(() => import('@/components/Landing/Why'));
const Values = dynamic(() => import('@/components/Landing/Values'));
const Courses = dynamic(() => import('@/components/Landing/Courses'));
const Trainings = dynamic(() => import('@/components/Landing/Trainings'));
const AwarenessTraining = dynamic(
  () => import('@/components/Landing/Trainings'),
);
const SchoolOutreach = dynamic(
  () => import('@/components/Landing/School-outreach'),
);
const Instructor = dynamic(() => import('@/components/Landing/Instructor'));
const Testimonials = dynamic(() => import('@/components/Landing/Testimonials'));
const Join = dynamic(() => import('@/components/Landing/Join'));
const FAQs = dynamic(() => import('@/components/Landing/FAQs'));
const NewsAndUpdates = dynamic(() => import('@/components/Landing/News'));
const Footer = dynamic(() => import('@/components/Landing/Footer'));

const Home = () => {
  return (
    <main className="px-4 lg:px-20 lg:mt-20 2xl:px-52 overflow-x-clip">
      <LayoutContextProvider>
        <section id="banner">
          <Banner />
        </section>
        <section id="why">
          <Why />
        </section>
        <section id="values">
          <Values />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="trainings">
          <Trainings />
        </section>
        <section id="awareness-training">
          <AwarenessTraining />
        </section>
        <section id="school-outreach">
          <SchoolOutreach />
        </section>
        <section id="instructor">
          <Instructor />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="join">
          <Join />
        </section>
        <section id="faqs">
          <FAQs />
        </section>
        <section id="news-and-updates">
          <NewsAndUpdates />
        </section>
        <Footer />
      </LayoutContextProvider>
    </main>
  );
};

export default Home;
