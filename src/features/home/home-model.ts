import Aravind from "../../images/aravind_circles.svg";
import Bharath from "../../images/bharath_circles.svg";
import Dsa from "../../images/dsa.svg";
import Frontend from "../../images/frontend.svg";

export const coursesList = [
  {
    courseId: "mern",
    courseName: "MERN Stack web development",
    duration: "6 months",
    description:
      "Master frontend development build large scale projects with team of students",
    imageUrl: Frontend,
    courseType: "SOFTWARE",
    price: 15000,
    discount: 0,
    outcomes: [
      {
        icon: "movie",
        label: "Live classes held on weekdays for 2 hours each day.",
      },
      {
        icon: "assignment",
        label: "Biweekly contests",
      },
      {
        icon: "videocam",
        label: "Lifetime access to recorded lectures",
      },
      {
        icon: "bolt",
        label: "Develop a Bus Booking Platform project.",
      },
    ],
    curriculumPoints: [
      "HTML and CSS",
      "JavaScript Basic to Advanced",
      "DSA using JavaScript",
      "Document Object Model(DOM)",
      "Projects using HTML, CSS, JavaScript",
      "React Basic to Advanced",
      "Redux",
      "Solid projects using React",
    ],
    link: "course-details/frontend",
    identifier: "FRONTEND",
  },
  {
    courseId: "dsa",
    courseName: "Basic to Advanced DSA using java",
    duration: "4 Months",
    description:
      "Master DSA using C++ from scratch with expert instructors in the domain",
    imageUrl: Dsa,
    courseType: "SOFTWARE",
    price: 15000,
    discount: 0,
    outcomes: [
      {
        icon: "movie",
        label: "1.5 hr live class with 0.5 hr doubt session on weekdays",
      },
      {
        icon: "assignment",
        label: "Weekly coding contests",
      },
      {
        icon: "videocam",
        label: "Lifetime access to recorded lectures",
      },
      {
        icon: "bolt",
        label: "Interview preparation & Resume building",
      },
    ],
    curriculumPoints: [
      "C++ basics to Advanced",
      "C++ STL",
      "Leetcode 200+ Problems",
      "Arrays, Stacks, Queues",
      "LinkedList",
      "Trees, Graphs",
      "Dynamic Programming",
      "Tries",
    ],
    link: "course-details/dsa",
    identifier: "DSA",
  },
];

export const instructors = [
  {
    name: "Aravind Samudrala",
    company: "Blue Yonder | Ex BlackBuck",
    role: "FullStack Developer",
    designation: "SWE2 Blue Yonder",
    college: "NIT Warangal'22 - BTech ECE",
    degree: "BTech",
    imageUrl: Aravind,
    linkedinUrl: "https://www.linkedin.com/in/samudrala-aravind-13599b172/",
    companyLogoUrl: "https://www.blackbuck.com/images/blackbuck-logo.svg",
    description:
      "Aravind is an exceptional Instructor for advanced front-end development, OOPS, & Node.js. He strives to aid students in securing frontend and backend positions at product-based companies.",
  },
  {
    name: "Bharath Reddy",
    company: "Amazon | Ex Saras",
    role: "Backend Developer",
    designation: "SDE1 Saras Analytics",
    college: "NIT Warangal'23 - BTech CSE",
    degree: "BTech",
    imageUrl: Bharath,
    linkedinUrl: "https://www.linkedin.com/in/sai-bharath-5104b51a4/",
    companyLogoUrl:
      "https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-1536x864.png",
    description:
      "Bharath, an NIT Warangal CSE graduate, excels in data structures and algorithms. He secured a 6-month Amazon internship, earned a PPO, and contributed as a Backend Developer at Saras Analytics.",
  },
];
