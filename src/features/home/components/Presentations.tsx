import "../styles/presentations.scss";
import React from "react";
import WifiIcon from '@mui/icons-material/Wifi';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';

let items = [
    {
        title: "Live interactive sessions by industry experts",
        description: "Get valuable industry insights from our instructors who have dedicated years to learning and unlearning.",
        Icon: WifiIcon
    },
    {
        title: "Dedicated sessions to solve your queries",
        description: "We offer doubt-solving sessions with mentors to help you stay on track with the course.",
        Icon: DuoOutlinedIcon
    },
    {
        title: "Hands-on projects to apply your learnings",
        description: "Our programs prioritize hands-on learning, with projects at the end of each module to reinforce each topic.",
        Icon: NotesOutlinedIcon
    },
    {
        title: "Active community to help you grow",
        description: "Our programs offer a college-like learning experience with a supportive community of like-minded individuals",
        Icon: GrassOutlinedIcon
    }
]

export const Presentations = () => {
    return (
        <div className="presentations-container">
            <p className="root-title">Presenting the <span className="head-brand">4ByteInteger</span> way!</p>
            <div className="presentations">
                {
                    items.map((item, index) => {
                        return <div className="item">
                            <item.Icon className={`icon icon${index + 1}`} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}