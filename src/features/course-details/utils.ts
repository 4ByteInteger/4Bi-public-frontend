import { instructors } from "../home/home-model";
import { dsaTopicsList, frontendTopicsList } from "./dsa-topics-list";

export const courseDetailsData = {
    dsa: {
        floatBar: {
            duration: "Dec 26 2023 - Apr 26 2024",
            timings: "9PM to 10:30PM Weekdays"
        },
        heroSection: {
            title: "Master DSA Using C++",
            bylineText: "Master Data Structures and Algorithms in C++ with our comprehensive course. From fundamental data structures to advanced algorithmic techniques, we'll guide you through the world of efficient coding. Join us to sharpen your problem-solving skills and become a confident programmer."
        },
        courseEssentials: {
            title: "Master Data Structures and Algorithms with Confidence",
            bylineText: "Achieve expertise in Data Structures and Algorithms through hands-on projects and receive expert guidance from industry professionals in this comprehensive program. Sharpen your problem-solving skills and excel in coding challenges.",
            duration: {
                label: "Program Duration",
                value: "4 Months"
            },
            perks: {
                label: "Leetcode Problems",
                value: "200+"
            },
            liveClasses: {
                label: "Live Classes",
                value: "60+"
            }
        },
        instructorDetails: instructors[1],
        topics: dsaTopicsList
    },
    frontend: {
        floatBar: {
            duration: "Feb 01 2023 - May 15 2024",
            timings: "8PM to 9PM Weekdays"
        },
        heroSection: {
            title: "Master Frontend Using React",
            bylineText: "Level up your frontend development skills with our React course. From creating interactive user interfaces to mastering state management, our hands-on training will turn you into a React pro. Join us and build the future of web applications!"
        },
        courseEssentials: {
            title: "Build Frontend engineering skills with confidence",
            bylineText: "Achieve mastery in Frontend engineering through practical projects and expert feedback from industry professionals in this comprehensive program.",
            duration: {
                label: "Program Duration",
                value: "4.5 Months"
            },
            perks: {
                label: "Real World Projects",
                value: "10+"
            },
            liveClasses: {
                label: "Live Classes",
                value: "60+"
            }
        },
        instructorDetails: instructors[0],
        topics: frontendTopicsList
    }
}

export function getTimer(futureTime: Date) {
    const timeDifference = futureTime - new Date();

    const seconds = Math.floor((timeDifference % 60000) / 1000);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return [days, hours, minutes, seconds];
}