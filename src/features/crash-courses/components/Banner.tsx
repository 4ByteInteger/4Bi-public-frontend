import React, { useEffect, useState } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { getTimer } from "../../course-details/utils";

const startingDate = new Date(2024, 2, 3, 20, 0, 0, 0);

export const Banner = ({ openEnrollModal }) => {
    const [time, setTime] = useState(getTimer(startingDate));

    useEffect(() => {
        let timerId = setInterval(() => {
            setTime(getTimer(startingDate))
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="banner">
            <ShoppingBagIcon className='icon' />
            <div>
                <h2 style={{ margin: 0 }}>React and  Redux</h2>
                <span>Our next batch will be starting in</span>
            </div>
            <div className='timer'>
                <div className='fc item'>
                    <span className='value'>{time[0]}</span>
                    <span className='label'>DAYS</span>
                </div>
                <span>:</span>
                <div className='fc item'>
                    <span className='value'>{time[1]}</span>
                    <span className='label'>HOURS</span>
                </div>
                <span>:</span>
                <div className='fc item'>
                    <span className='value'>{time[2]}</span>
                    <span className='label'>MINS</span>
                </div>
                <span>:</span>
                <div className='fc item'>
                    <span className='value'>{time[3]}</span>
                    <span className='label'>SECS</span>
                </div>
            </div>
            <button className='btn' onClick={openEnrollModal}>Enroll Now</button>
        </div>
    );
}