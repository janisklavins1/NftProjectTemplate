import React, { Fragment } from "react";
import './MainPage.scss';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <Fragment>
            <div className="timer-container">
                <div className="timer-data"><p>{timerDays} :&nbsp;</p></div>
                <div className="timer-data"><p>{timerHours} :&nbsp;</p></div>
                <div className="timer-data"><p>{timerMinutes} :&nbsp;</p></div>
                <div className="timer-data"><p>{timerSeconds}</p></div>
            </div>
        </Fragment>
    );
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Clock;