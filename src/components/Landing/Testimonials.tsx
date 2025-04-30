import Testimonial from './Testimonial';

const testimonials: any[] = [
  {
    id: 1,
    words:
      '"I was looking for a cost-effective way to train my employees on cybersecurity, and this CyberDemia exceeded my expectations. The comprehensive resources and quizzes helped reinforce learning, and I can see the positive impact on our workplace security culture."',
    fullname: 'Biola Jimoh',
    company: 'XchangeBox',
    position: 'Co-founder',
    image:
      'data:image/jpeg;base64,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',
  },
  // {
  //   id: 2,
  //   words:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
  //   fullname: 'Full name',
  //   company: 'company',
  //   position: 'position',
  //   image: '/images/profile.png',
  // },
  {
    id: 3,
    words:
      '"The depth of knowledge provided in this training is impressive. The hands-on labs and simulations allowed me to apply what I learned in a safe environment. CyberDemia has become my go-to platform for continuous learning in the fast-evolving field of cybersecurity."',
    fullname: 'Praise Nze Light',
    company: 'AFIT',
    position: 'Cybersecurity Science Student',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 4,
    words:
      '"As someone without a technical background, I was initially intimidated by cybersecurity. However, the user-friendly design and step-by-step guidance of the training modules made learning enjoyable and accessible. I now feel confident in recognising potential threats!"',
    fullname: 'Lawal Lawal',
    company: 'Gombe State University',
    position: 'Student',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 5,
    words:
      '"The cybersecurity training provided by CyberDemia has transformed our teams approach to security. The interactive modules and real-world scenarios made it easy for everyone to grasp complex concepts. Our incident response time has significantly improved since we started using it!"',
    fullname: 'Harry Oni',
    company: 'Min of Interior.',
    position: 'Min of Interior.',
    image:
      'data:image/jpeg;base64,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',
  },
  // {
  //   id: 6,
  //   words:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
  //   fullname: 'Full name',
  //   company: 'company',
  //   position: 'position',
  //   image: '/images/profile.png',
  // },
];

const Testimonials = () => {
  return (
    <div className="mt-20 md:mt-32">
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
