import React from "react";
import VideocamIcon from '@mui/icons-material/Videocam';
import "../styles/topics-list.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const topics = [
    {
        type: "video",
        title: "React Introduction",
        description: "",
        coveredTopics: [
            "DOM & VDOM",
            "HTML with React",
            "Javascript Modules"
        ]
    },
    {
        type: "video",
        title: "Get started with React",
        description: "Class Components",
        coveredTopics: [
            "Packages and dependency tree",
            "JSX and Babel compiler, Event handling",
            "Webpack and bundling",
            "Basic react components"
        ]
    },
    {
        type: "video",
        title: "Component life cycle",
        description: "Class Components, component lifecycle methods deep dive",
        coveredTopics: [
            "Class Components",
            "Component, PureComponent",
            "Lifecycle Methods and Component tree",
            "Higher Order components",
            "State & Props"
        ]
    },
    {
        type: "video",
        title: "Functional Components & Hooks",
        description: "Functional components and Hooks",
        coveredTopics: [
            "Why Functional components",
            "useState",
            "useEffect",
            "useRef",
            "useCallback",
            "useMemo",
            "Effect of closures on useCallback and useMemo"
        ]
    },
    {
        type: "video",
        title: "Get into more !!!",
        description: "Building UI Blocks",
        coveredTopics: [
            "Conditional Rendering",
            "Looping over components",
            "refs and useImperativeHandle",
        ]
    },
    {
        type: "video",
        title: "Events & Event Handling",
        description: "Efficient way of handling Events in React, reducing memory consumption and event handling techniques",
        coveredTopics: [
            "Event bubbling and Capturing",
            "Event delegation",
        ]
    },
    {
        type: "video",
        title: "React router DOM",
        description: "You'll get to know everything about client side routing",
        coveredTopics: [
            "Nested routes",
            "Path params and Query Params",
            "Public and Private routes",
        ]
    },
    {
        type: "video",
        title: "Context API and Introduction to Redux",
        description: "Building UI Blocks",
        coveredTopics: [
            "Context API",
            "Observables, Observers",
            "Application State",
            "Store setup",
            "Reducers"
        ]
    },
    {
        type: "video",
        title: "E-Commerce Project",
        description: "Building Zepto clone Showing groceries, cart and ordering",
        coveredTopics: [
            "Redux",
            "Efficient component tree setup",
        ]
    },
    {
        type: "video",
        title: "Redux Side effects",
        description: "Understanding the use of side effects in redux",
        coveredTopics: [
            "Redux saga",
            "Redux underlying architecture"
        ]
    },

]

export const TopicsList = () => {
    return (
        <div>
            <h1 className="fr-aic jc-c g-10 subtitle">Course Curriculum </h1>
            <div className="course-details">
                <div className="side-banner">
                    <div className="card">
                        <img src="/images/thumbnail.png" />
                        <ul>
                            <li>
                                <VideocamIcon />
                                <span>50+ hours of live sessions</span>
                            </li>
                            <li>
                                <AccessTimeIcon />
                                <span>Weekends ( Sat + Sun ) 8PM to 11PM</span>
                            </li>
                            <li>
                                <WorkIcon />
                                <span>5 Major projects</span>
                            </li>
                            <li>
                                <Diversity3Icon />
                                <span>Interview Preparation</span>
                            </li>
                            <li>
                                <Groups2Icon />
                                <span>Team projects & Github usage</span>
                            </li>
                            <li>
                                <CodeIcon />
                                <span>Best coding practices</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="topics-list">
                    {
                        topics.map((topic) => {
                            return (
                                <div className="topic-item">
                                    <div className="fr-aic g-10" style={{ flexWrap: "nowrap", alignItems: "flex-start" }}>
                                        <VideocamIcon />
                                        <span className="title">{topic.title}</span>
                                    </div>
                                    <p className="description">{topic.description}</p>
                                    <ul>
                                        {
                                            topic?.coveredTopics?.map((coveredTopic, j) => <li key={j}>{coveredTopic}</li>)
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}