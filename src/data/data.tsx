import {
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Shubh Tiwari.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently persuing
        Bachelors of Technology in <strong className="text-stone-100">C.S.E</strong> from Indian Institute of Information Technology, Sri City
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1GuuJz80sdQ8puDe_mlZHlryYelxfz6A9/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate about full-stack development, I work with ReactJS, React Native, Next.js, MongoDB, and PostgreSQL to build dynamic and efficient applications. Currently, I'm diving into Solidity and Ethereum development to expand my skills in blockchain technology.`,
  aboutItems: [
    {label: 'Location', text: 'Kanpur', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'ReactJS',
        level: 9,
      },
      
      {
        name: 'NextJS',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://www.gemsandrudrakshaguru.com/',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/SHUBH9569/pariksa',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/SHUBH9569/Unityfirst-TempleBooking',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/SHUBH9569/seller-application',
    image: porfolioImage4,
  }
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2019',
    location: 'Subash Public Se. Sec. School',
    title: 'High School',
    content: <p>My school experience was probably foundational in building your curiosity for technology and programming.</p>,
  },
  {
    date: 'April 2021',
    location: 'Subash Public Se. Sec. School',
    title: 'Intermediate',
    content: <p>My school experience was probably foundational in building your curiosity for technology and programming.</p>,
  },
  {
    date: 'April 2026',
    location: 'IIIT Sri city',
    title: 'B.Tech (CSE)',
    content: <p>My experience at IIIT Sri City likely includes a combination of academic rigor and hands-on projects, especially in your field of Computer Science and Engineering</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2024 - Present',
    location: 'Google Developers Group',
    title: 'Application Development Domain Lead',
    content: (
      <p>
        As an application domain lead in Google Developer Group (GDG), I am responsible for guiding and managing the development of applications, which likely includes overseeing projects, mentoring developers, and ensuring the quality and functionality of applications created within the GDG.
      </p>
    ),
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'shubhtiwari9569@gmail.com',
      href: 'mailto:shubhtiwari9569@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kanpur',
      href: 'https://www.google.ca/maps/place/Kanpur,+Uttar+Pradesh/@26.4471501,80.255981,12z/data=!3m1!4b1!4m6!3m5!1s0x399c4770b127c46f:0x1778302a9fbe7b41!8m2!3d26.449923!4d80.3318736!16zL20vMDFfcTdo?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D',
    },
    
    {
      type: ContactType.Github,
      text: 'SHUBH9569',
      href: 'https://github.com/SHUBH9569',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SHUBH9569'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shubh-tiwari-6a43b2293/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/Shubh_9569'},
];
