import { FaReact } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaWix } from "react-icons/fa";




// const space = ty6v85dqhyv5;
//  const token = hCzQeZhzB2usfuMwbr4KVismWDbt6 - aPRaoeorEcnx0;
export const menus = [
  {
    id: 1,
    text: "home",
    url:'/'
  },
  {
    id: 2,
    text: "about",
    url:'/about'
  },
  {
    id: 3,
    text: "projects",
    url:'/projects'
  },
  {
    id: 4,
    text: "contact",
    url:'/contact'
  },
];

export const featuredProject = [
  {
    id: 1,
    title: "comfy store",
    image: "/comfy.png",
  },
  {
    id: 2,
    title: "father and sons logistics",
    image: "/fathers (2).png",
  },
  {
    id: 3,
    title: "mix master",
    image: "/mixMaster (2).png",
  },
];
export const services = [
  {
    id: "1",
    icon: <FaReact className="" />,
    title: "frontend development",
    description:
      "Crafting visually appealing and interactive user experiences using HTML, CSS, JavaScript and it endless framework (React.js) to enhance the frontend of websites and applications.",
  },
  {
    id: "2",
    icon: <TbBrandWebflow className="" />,
    title: "webflow development",
    description:
      "Leveraging Webflow's intuitive platform to design and develop responsive websites seamlessly. Transforming ideas into visually stunning and user-friendly web experiences without extensive coding.",
  },
  {
    id: "3",
    icon: <FaWordpress className="" />,
    title: "wordpress development",
    description:
      "Harnessing the power of WordPress as a content management system to create websites. From blogs to e-commerce platforms, utilizing themes and plugins to customize designs and functionalities for optimal user engagement.",
  },
];

export const singleProjects = [
  {
    title: "father and sons logistics",
    description:
      ' The Freight Brokerage Logistics Website, tailored for a client in the USA, showcasesa seamless fusion of WordPress, a popular CMS website builder, and my extensive expertise in frontend development. This platform serves as a comprehensive digital hub for logistics and freight brokerage services. The WordPress framework not only expedites development but also ensures easy content management and scalability for the client. Leveraging my frontend skills, the website boasts an intuitive and user-friendly interface, offering visitors a streamlined experience to explore services, track shipments, and connect with the brokerage team. The incorporation of responsive design principles ensures optimal performance across devices, meeting the diverse needs of the logistics industry. This project stands as a testament to my ability to harness both CMS efficiency and frontend proficiency to deliver a tailored solution for the client"s logistics and freight brokerage needs in the USA.',
    url: "https://fnsbrokeragellc.net/",
    stack: ["wordpress"],
    service: "wordpress development",
  },
  {
    title: "comfy store",
    description:
      "The ReactJS E-commerce Store, developed as a personal project for skill mastery, is a comprehensive web platform showcasing a robust implementation of e-commerce functionalities. Built with ReactJS and utilizing Redux Toolkit for state management, the website seamlessly covers all essential features, from adding and editing items in the cart to deleting items and more. The integration of Axios ensures efficient data fetching, enhancing the user experience by providing real-time product information. The latest version of React Router facilitates smooth navigation throughout the site, while the aesthetically pleasing user interface adds a polished touch to the overall user experience. This project serves as a testament to my commitment to mastering ReactJS, combining practical implementation with a feature-rich e-commerce showcase for hands-on learning and skill refinement",
    url: "https://vcomfystore.netlify.app/",
    stack: [
      "react.js",
      "HTML",
      "tailwind css",
      "redux",
      "redux",
      "redux",
      "redux",
      "redux",
    ],
    service: "website development",
  },
  {
    title: "mix master",
    description:
      "MixMaster, a ReactJS project, is a user-friendly cocktail discovery app that allows users to seamlessly search for their favorite cocktail drinks and access comprehensive details about each concoction. Leveraging React Query for efficient state management, the app boasts a responsive design for a smooth user experience. Users can explore a diverse range of cocktails, accessing vital information such as drink descriptions, ingredients, and preparation instructions. MixMaster not only simplifies the search for the perfect drink but also serves as an interactive guide, providing enthusiasts with a wealth of details to elevate their mixology experience.",
    url: "https://vmixmaster.netlify.app/",
    stack: ["react.js", "react query", "HTML", "styled component"],
    service: "website development",
  },
  {
    title: "tea station",
    description:
      "The Semantic HTML and CSS Showcase is a project meticulously crafted to highlight my proficiency in creating structured and accessible web designs. Focused on semantic HTML, the project emphasizes the use of meaningful tags to enhance website structure and accessibility. Leveraging CSS Grid and Flexbox, the layout design achieves a harmonious balance of responsiveness and visual appeal across various screen sizes. Every element is strategically positioned to showcase a mastery of layout techniques, ensuring seamless navigation and an engaging user experience. Through this project, I aim to demonstrate the power of semantic HTML paired with advanced CSS features, emphasizing clean code practices and the ability to create visually compelling, responsive web designs that adhere to the principles of accessibility and usability",
    url: "https://tea-estation.netlify.app",
    stack: ["HTML", "css"],
    service: "website development",
  },
  {
    title: "jobster",
    description:
      "The Job Tracking App, developed with ReactJS, is a user-friendly web application designed to empower individuals in efficiently managing their job applications. With a clean and intuitive interface, users can easily add, edit, and delete job entries, while the dashboard offers at-a-glance insights into the status of pending, approved, and declined applications. The app prioritizes a responsive design, ensuring a seamless experience across devices, and incorporates user authentication with role-based access control for enhanced security. Leveraging state-of-the-art technologies such as Redux for state management and integrating with a backend server, the app provides a centralized platform for users to navigate their professional pursuits, with future enhancements including potential integrations with job platforms and the implementation of an analytics dashboard for in-depth application trend analysis.",
    stack: ["react.js", "redux", "styled component", "react-router"],
    service: "website development",
  },
  {
    title: "nexter project",
    description:
      "The ReactJS Static Website, meticulously crafted to hone my skills in component-based architecture and maximize code reusability, is an exemplary showcase of streamlined design and efficient development. Built with ReactJS and styled using CSS/SCSS, this project places a strong emphasis on modular components, allowing for seamless reuse and maintenance. The website features a clean and responsive user interface, with each section carefully implemented as a reusable React component, showcasing the power of component-driven development. Leveraging the React ecosystem, the project demonstrates the efficiency of managing state and rendering content dynamically while maintaining a cohesive and visually appealing design. This endeavor not only exemplifies mastery in React and CSS/SCSS but also serves as a testament to the commitment to best practices in frontend development, ensuring scalability, maintainability, and a delightful user experience.",
    url: "https://vnexterproject.netlify.app",
    stack: ["HTML", "react.js", "SCSS & CSS"],
    service: "website development",
  },
  {
    title: "github users",
    description:
      "GitHub users is a React-based web application that empowers users to seamlessly explore GitHub profiles, providing a detailed overview of users' activities. Leveraging technologies such as React, Context API, React Router, Auth0, Axios, FusionCharts, and Styled Components, the application ensures a dynamic and secure user experience. Users can search for GitHub profiles, access comprehensive details, and explore activities like followers, following, and top languages used. The integration of Auth0 ensures secure authentication, while Axios facilitates efficient data fetching from the GitHub API. FusionCharts adds visual appeal, presenting insights like most popular repositories and frequently used languages. With a robust stack and a focus on user-friendly design, GitHub Explorer redefines the exploration of GitHub profiles.",
    url: "https://vgithubuser.netlify.app",
    stack: ["react.js", "contextApi", "styled component", "auth0"],
    service: "website development",
  },
  {
    title: "hernandez landscape",
    description:
      "I am thrilled to present Hernandez Landscape, a captivating WordPress site I developed to showcase stunning landscapes across the USA! This project aimed to inspire exploration of nature's wonders, from the iconic Grand Canyon to the serene beauty of New England's rolling hills. Through high-quality images, videos, and interactive galleries, Hernandez Landscape offers a visual feast of the diverse American landscapes. Additionally, the site provides valuable resources on gardening, sustainable practices, and landscape design, all tailored for the American audience.",
    url: "https://hernandezlandscapes.com/",
    stack: ["wordpress"],
    service: "wordpress development",
  },
  {
    title: "sweftpay",
    description:
      "SweftPay, a collaborative effort in transforming mobile transactions, features a user-friendly website aimed at raising awareness about the convenience of mobile transactions through our mobile app, available for download on Google Play Store and the App Store. As one of the developers behind this initiative, our platform serves as a gateway for users to discover the seamless experience of purchasing airtime, subscribing to data plans, and conducting virtual payments through our mobile app interface. Prioritizing accessibility, convenience, and security, SweftPay empowers users with information and resources to embrace efficient solutions for their everyday financial needs, ultimately fostering connectivity and financial inclusion for all.",
    url: "https://sweftpay.com/",
    stack: ["react.js", "tailwind css"],
    service: "website development",
  },
  {
    title: "starx",
    description:
      "The StarX NFT Landing Page epitomizes excellence in web development, meticulously engineered with React.js and TailwindCSS. Serving as a beacon of proficiency, this platform showcases the seamless fusion of Tailwind's utility-first approach with React.js components, demonstrating mastery in crafting captivating user interfaces. Engineered for responsiveness and peak performance",
    url: "https://vnft-landingpage.netlify.app/",
    stack: ["react.js", "tailwind css"],
    service: "website development",
  },
];

export const skills = [
  {
    skill: "react & redux",
    icon: <FaReact />,
  },
  {
    skill: "HTML | CSS | Sass",
    icon: <FaHtml5 />,
  },
  {
    skill: "javascript | typescript",
    icon: <TbBrandJavascript />,
  },
  {
    skill: "tailwind css",
    icon: <SiTailwindcss />,
  },
  {
    skill: "node.js",
    icon: <IoLogoNodejs />,
  },
];


export const skill2 = [
  {
    skill: "webflow",
    icon: <TbBrandWebflow />,
  },
  {
    skill: "wordpress",
    icon: <FaWordpress />,
  },
  {
    skill: "wix",
    icon: <FaWix />,
  },
  {
    skill: "shopify",
    icon: <FaReact />,
  },
 
];




