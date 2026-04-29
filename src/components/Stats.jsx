import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimeLineContext } from "../context/Context";

const Stats = () => {
    const { timelineData } = useContext(TimeLineContext);
     const counts = { call: 0, text: 0, video: 0 };

  timelineData.forEach((item) => {
    if (item.action === "call") counts.call++;
    else if (item.action === "Text") counts.text++;
    else if (item.action === "video-call") counts.video++;
  });
 const data = [
  {name:"Call", value: counts.call, fill: "#0088FE"},
  {name:"Text", value: counts.text, fill: "#00C49F"},
  {name:"Video", value: counts.video, fill: "#00FF28"},
  
 ]



    return (
        <div className="my-10 shadow p-10 rounded-md  borderslate-300 container mx-auto">
            <h2 className="font-semibold text-3xl mb-16 text-center">By Interaction Type</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh',margin:"auto", aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        
        cornerRadius="50%"
        fill="#8884d8"
       
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend></Legend>
     <Tooltip></Tooltip>
    </PieChart>
        </div>
    );
};

export default Stats;