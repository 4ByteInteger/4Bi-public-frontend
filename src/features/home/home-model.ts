import { ObservableObject, batch, computed, observable } from "@legendapp/state";
import { ICoursesModel, IInstructorTestimonialModel } from "./home-types";
import { Endpoints } from "../../network/Endpoints";
import { RequestMethods, getApiStatus } from "../../network/request";
import Aravind from "../../images/aravind_circles.svg";
import Bharath from "../../images/bharath_circles.svg";
import Dsa from "../../images/dsa.svg";
import Frontend from "../../images/frontend.svg"

const coursesList = [
    {
        "courseId": 184253,
        "courseName": "Frontend with React",
        "duration": 4.5,
        "description": "Master frontend development build large scale projects with team of students",
        "imageUrl": Frontend,
        "courseType": "SOFTWARE",
        "price": 15000,
        "discount": 0,
        "curriculumPoints": [
            "HTML and CSS",
            "JavaScript Basic to Advanced",
            "DSA using JavaScript",
            "Document Object Model(DOM)",
            "Projects using HTML, CSS, JavaScript",
            "React Basic to Advanced",
            "Redux",
            "Solid projects using React"
        ],
        "link": "course-details/frontend",
        "identifier": "FRONTEND"
    },
    {
        "courseId": 184254,
        "courseName": "DSA using C++",
        "duration": 4.0,
        "description": "Master DSA using C++ from scratch with expert instructors in the domain",
        "imageUrl": Dsa,
        "courseType": "SOFTWARE",
        "price": 15000,
        "discount": 0,
        "curriculumPoints": [
            "C++ basics to Advanced",
            "C++ STL", "Leetcode 200+ Problems",
            "Arrays, Stacks, Queues",
            "LinkedList",
            "Trees, Graphs",
            "Dynamic Programming",
            "Tries"
        ],
        "link": "course-details/dsa",
        "identifier": "DSA"
    }
]

export const instructors = [
    {
        "name": "Aravind Samudrala",
        "company": "Blue Yonder | Ex BlackBuck",
        "role": "FullStack Developer",
        "designation": "SWE2 Blue Yonder",
        "college": "NIT Warangal'22 - BTech ECE",
        "degree": "BTech",
        "imageUrl": Aravind,
        "linkedinUrl": "https://www.linkedin.com/in/samudrala-aravind-13599b172/", "companyLogoUrl": "https://www.blackbuck.com/images/blackbuck-logo.svg",
        "description": "Aravind is an exceptional Instructor for advanced front-end development, OOPS, & Node.js. He strives to aid students in securing frontend and backend positions at product-based companies.",
    },
    {
        "name": "Bharath Reddy",
        "company": "Amazon | Ex Saras",
        "role": "Backend Developer",
        "designation": "SDE1 Saras Analytics",
        "college": "NIT Warangal'23 - BTech CSE",
        "degree": "BTech",
        "imageUrl": Bharath,
        "linkedinUrl": "https://www.linkedin.com/in/sai-bharath-5104b51a4/",
        "companyLogoUrl": "https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-1536x864.png",
        "description": "Bharath, an NIT Warangal CSE graduate, excels in data structures and algorithms. He secured a 6-month Amazon internship, earned a PPO, and contributed as a Backend Developer at Saras Analytics."
    }];

class HomeScreenModel {
    courses$: ObservableObject<ICoursesModel>;
    instructorTestimonials$: ObservableObject<IInstructorTestimonialModel>;

    constructor() {
        this.courses$ = observable<ICoursesModel>({
            apiStatus: 'init'
        });

        this.instructorTestimonials$ = observable<IInstructorTestimonialModel>({
            apiStatus: 'init'
        });
    }

    private fetchAllCourses = async () => {
        const httpConfig = {
            url: Endpoints.coursesList,
            method: RequestMethods.GET,
        }

        batch(() => {
            this.courses$.apiStatus.set('success');
            this.courses$.data?.set?.(coursesList);
        })

        /* 
        const response = await request(httpConfig);
        if(response.status === "success"){
            const serverResponse: ICourseItem[] = response.data?.result ;
            batch(() => {
                this.courses$.apiStatus.set('success') ;
                this.courses$.data?.set?.(serverResponse);
            })
        }
        else {
            batch(() => {
                this.courses$.apiStatus.set('error');
                this.courses$.error?.errorCode?.set?.(response.statusCode);
                this.courses$.error?.errorMessage?.set?.(response.message);
            })
        }
        */
    }

    private fetchInstructorTestimonials = async () => {
        const httpConfig = {
            url: Endpoints.instructorTestimonials,
            method: RequestMethods.GET
        }

        this.instructorTestimonials$.set({
            apiStatus: 'success',
            data: instructors
        })
        /*
        const response = await request(httpConfig);
        if(response.status === "success"){
            const serverResponse = response.data?.result; 
            batch(() => {
                this.instructorTestimonials$.set({
                    apiStatus: 'success',
                    data: serverResponse
                })
            })
        }
        else {
            // TODO: show a tosat message
        }
        */
    };

    views_courses = computed(() => getApiStatus(this.courses$.apiStatus.get()));

    views_instructor_testimonials = computed(() => getApiStatus(this.instructorTestimonials$.apiStatus.get()))

    actions = {
        fetchAllCourses: this.fetchAllCourses,
        fetchInstructorTestimonials: this.fetchInstructorTestimonials
    }
}

export function createHomeScreenModel() {
    return new HomeScreenModel();
}