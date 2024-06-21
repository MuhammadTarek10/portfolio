export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  //{ name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Making clients in the making is a priority.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Working on a Invoice System SaaS App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Foodito Backend REST API",
    des: "REST Apis for Foodito Mobile App",
    img: "/rest.svg",
    iconLists: ["/express.svg", "/ts.svg", "/database.svg"],
    link: "https://github.com/MuhammadTarek10/foodito-backend",
    bottomText: "Check Source Code",
  },
  {
    id: 2,
    title: "AI Blog Generator",
    des: "Generate Blogs from Youtube Videos using OpenAI's GPT-3.5",
    img: "/book.svg",
    iconLists: [
      "/django.svg",
      "/tail.svg",
      "/openai.svg",
      "/youtube.svg",
    ],
    link: "https://github.com/MuhammadTarek10/ai-blog-generator",
    bottomText: "Check Source Code",
  },
  {
    id: 3,
    title: "Y 23 Project",
    des: "CRM App that helps students in learining robotics and making instructors follow progress",
    img: "/y-23.svg",
    iconLists: ["/flutter.svg", "/firebase.svg", "/playstore.svg"],
    link: "https://play.google.com/store/apps/details?id=com.tarek.y23",
    bottomText: "Check App on Store",
  },
  {
    id: 4,
    title: "Google Docs Minimal Clone",
    des: "Simple feature of making docs together, allows sharing and parralel documenting",
    img: "/docs.svg",
    iconLists: ["/express.svg", "/mongo.svg", "/websockets.svg"],
    link: "https://github.com/MuhammadTarek10/docs-clone-nodejs",
    bottomText: "Check Source Code",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
{
    id: 1,
    title: "Freelance FullStack Dev",
    desc: "Made fullstack apps to clients using NextJs, ExpressJS, Django, Flask.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
   {
    id: 2,
    title: "Mobile App Dev - Metas",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Team Lead - Torpedo",
    desc: "Designed and developed apps using PyQT and Python, implemented controlling mechanism and network configurations for the ROV.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Scraping Specialist",
    desc: "Made scrappers that helped the company automate collecting data process.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/MuhammadTarek10",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammad-tarek-4a674b194/",
  },
];
