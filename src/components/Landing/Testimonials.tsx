import Testimonial from './Testimonial';

const testimonials: any[] = [
  {
    id: 1,
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    fullname: 'Full name',
    company: 'company',
    position: 'position',
    image: '/images/profile.png',
  },
  {
    id: 2,
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    fullname: 'Full name',
    company: 'company',
    position: 'position',
    image: '/images/profile.png',
  },
  {
    id: 3,
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    fullname: 'Full name',
    company: 'company',
    position: 'position',
    image: '/images/profile.png',
  },
  {
    id: 4,
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    fullname: 'Full name',
    company: 'company',
    position: 'position',
    image: '/images/profile.png',
  },
  {
    id: 5,
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    fullname: 'Full name',
    company: 'company',
    position: 'position',
    image: '/images/profile.png',
  },
  {
    id: 6,
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    fullname: 'Full name',
    company: 'company',
    position: 'position',
    image: '/images/profile.png',
  },
];

const Testimonials = () => {
  return (
    <div className='mt-20 md:mt-32'>
      <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-base font-semibold">
        <span>See what our students say</span>
      </div>
      <div className="testimonies flex flex-wrap items-center justify-center gap-5">
        {testimonials.map((testimony) => (
          <Testimonial
            key={testimony.id}
            words={testimony.words}
            name={testimony.fullname}
            company={testimony.company}
            position={testimony.position}
            image={testimony.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
