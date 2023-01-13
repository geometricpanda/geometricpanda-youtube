import {intervalToDuration} from 'date-fns';
import {zeroPad} from "./zero-pad.js";

export const secondsToTime = (time) => {
    const t = intervalToDuration({start: 0, end: time * 1000})
    const {hours, minutes, seconds} = intervalToDuration({start: 0, end: time * 1000})

    const timeString = [];

    hours && timeString.push(zeroPad(hours,2));
    minutes && timeString.push(zeroPad(minutes,2));
    seconds && timeString.push(zeroPad(seconds,2));

    return timeString.join(':');
}
