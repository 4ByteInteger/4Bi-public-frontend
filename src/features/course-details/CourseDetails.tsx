import React from "react";
import "./styles/index.scss";
import { ChevronRight } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CodeIcon from '@mui/icons-material/Code';
import { Curriculum } from "./Curriculum";
import { InstructorDetails } from "./InstructorDetails";

const width = window.innerWidth;

interface Props {
    data: any;
    onPressApplyNow: () => void;
}

export const CourseDetails: React.FC<Props> = ({ data, onPressApplyNow }) => {
    return (
        <section className="root-course-details-container">
            <div className={`apply-now-float g-20 fr-aic ${width <= 600 ? 'jc-c' : 'jc-sb'}`}>
                <div className="fr-aic g-20">
                    <div className="item fc ai-c g-10">
                        <span className="name">Program Duration</span>
                        <span className="value">{data.floatBar.duration}</span>
                    </div>
                    <div className="item fc ai-c g-10">
                        <span className="name">Class Timings</span>
                        <span className="value">{data.floatBar.timings}</span>
                    </div>
                </div>
                <button onClick={onPressApplyNow} className="brand-btn fr-aic g-10">
                    <span>Apply Now</span>
                    <ChevronRight />
                </button>
            </div>
            <div className="hero-section fc ai-c">
                <div className="hero-details">
                    <h1>{data.heroSection.title}</h1>
                    <p>{data.heroSection.bylineText}</p>
                    <button onClick={onPressApplyNow} className="brand-btn fr-aic g-10">
                        <span>Apply Now</span>
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className="overview-details fr-aic jc-sb">
                <div className="left">
                    <h2>{data.courseEssentials.title}</h2>
                    <p>{data.courseEssentials.bylineText}</p>
                </div>
                <div className="right">
                    <div className="card duration">
                        <b>{data.courseEssentials.duration.value}</b>
                        <div className="fr-aic g-10">
                            <CalendarMonthIcon className="icon" />
                            <span>{data.courseEssentials.duration.label}</span>
                        </div>
                    </div>
                    <div className="card problems">
                        <b>{data.courseEssentials.perks.value}</b>
                        <div className="fr-aic g-10">
                            <CodeIcon className="icon" />
                            <span>{data.courseEssentials.perks.label}</span>
                        </div>
                    </div>
                    <div className="card live-session">
                        <b>{data.courseEssentials.liveClasses.value}</b>
                        <div className="fr-aic g-10">
                            <LiveTvIcon className="icon" />
                            <span>{data.courseEssentials.liveClasses.label}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Curriculum topics={data.topics} />
            <InstructorDetails data={data.instructorDetails} />
        </section>
    );
}