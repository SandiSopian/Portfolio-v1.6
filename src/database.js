import ProjImg1 from "../src/assets/project1.jpg";
import ProjImg2 from "../src/assets/project2.jpg";
import ProjImg3 from "../src/assets/project3.jpg";
import ProjImg4 from "../src/assets/project4.jpg";
import ProjImg5 from "../src/assets/project5.jpg";
import ProfileImg from "../src/assets/profile.jpg";

// Header
export const header = {
  title: "SS.",
  email: "sandis17@outlook.com",
};

// Home | About
export const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sandi Sopian",
  role: "Front End Engineer",
  country: "Indonesia",
  phone: "+6282118338039",
  email: "sandis17@outlook.com",
  profile: ProfileImg,
  description: "I'm work for developing, plan, UI/UX design, build, and implement the user interface systems of websites, software programs, and web-based applications.",
  longDescription:
    "I graduated with a Bachelor of Computer Science from Bale Bandung University, my first work experience was as a sales clerk and double as a cashier at a mini market. I was also a printing laboratory operator working in the textile sector. Now I am a self-employer freelancer in the field of web development and content creator.",
  social: {
    linkedin: "https://www.linkedin.com/in/sandi-sopian-007623227/",
    github: "https://github.com/SandiSopian",
    website: "https://nakamapedia.blogspot.com/",
    behance: "https://www.behance.net/sandisopian",
    medium: "https://medium.com/@sandis1",
  },
};

// Skills
export const skills = ["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "React", "Next", "Bootstrap", "TailwindCSS", "Material UI", "Git", "Figma", "Canva", "Adobe"];

// Portfolio
export const portfolio = [
  {
    title: "Jongko Daging Mang Umis",
    description: "I'm build simple Landing Pages for selling meats of cow and chickens",
    image: ProjImg1,
    sourceCode: "https://github.com/SandiSopian/Landing-Page_Dagangan",
    livePreview: "https://jongko-daging-mang-umis.vercel.app/",
  },
  {
    title: "Venendria plants shop",
    description: "I'm slicing my own figma design for e-commerce plants shop",
    image: ProjImg2,
    sourceCode: "https://github.com/SandiSopian/Figma-to-NextJs-Tailwind---Slicing-1",
    livePreview: "https://figma-to-next-js-tailwind-slicing-ver-1.vercel.app/",
  },
  {
    title: "Sarang Coffee cafe",
    description: "I'm slicing my own figma design for bussiness landing page coffee shop ",
    image: ProjImg3,
    sourceCode: "https://github.com/SandiSopian/Figma-to-NextJs-Tailwind---Slicing-2",
    livePreview: "https://figma-to-next-js-tailwind-slicing-sarang-coffee-cafe.vercel.app/",
  },
  {
    title: "Tara Trip Gallery",
    description: "I'm slicing my own figma design for light gallery traveling website",
    image: ProjImg4,
    sourceCode: "https://github.com/SandiSopian/Figma-to-NextJs-Tailwind---Slicing-3",
    livePreview: "https://figma-to-next-js-tailwind-slicing-tara-trip-gallery.vercel.app/",
  },
  {
    title: "Wedding Invitation",
    description: "I'm slicing my own figma design for wedding website invitation landing pages",
    image: ProjImg5,
    sourceCode: "https://github.com/SandiSopian/Figma-to-ReactJs-Tailwind---Slicing-4",
    livePreview: "https://figma-to-react-js-tailwind-slicing-wedding-invitation-website.vercel.app/",
  },
];

// Pricing
export const pricing = {
  email: "sandis17@outlook.com",
};
