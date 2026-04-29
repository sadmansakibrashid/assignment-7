import { useState } from "react";
import { TimeLineContext } from "./Context";

const TimelineContextProvider=({children})=>{
    const [timelineData,setTimelineData] = useState([])

    return(
        <TimeLineContext.Provider value={timelineData,setTimelineData}>
            {children}
        </TimeLineContext.Provider>
    )
}
export default TimelineContextProvider;