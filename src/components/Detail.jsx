import { use, useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { useParams } from "react-router";
import { TimeLineContext } from "../context/Context";
import { toast } from "react-toastify";

const friendsPromise = fetch("/friends.json").
then((res)=>res.json());
const Detail = () => {
    const {id}= useParams();
    
    const friends = use(friendsPromise);

    const friend = friends.find(friend=>friend.id==id);
   const { timelineData, setTimelineData } = useContext(TimeLineContext);
    
    const handleAddData = (type,userDetails)=>{
      const newData = {
        ...userDetails,
        action: type,
        time: new Date().toISOString(),
      };
      setTimelineData([...timelineData,newData]);
      toast.success("done");
    }


  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">

      
     <div className="card bg-base-100 shadow-md p-6 flex flex-col items-center text-center h-full">
  <figure className="flex justify-center px-10 pt-10">
      <img src={friend.picture} className="rounded-xl" />
    </figure>

  <h2 className="text-xl font-bold mt-3">{friend.name}</h2>

  <span>
    <p className={`badge 
          ${friend.status === "overdue" ? "badge-error" : ""}
          ${friend.status === "almost due" ? "badge-warning" : ""}
          ${friend.status === "on-track" ? "badge-success" : ""}
        `}>
          {friend.status}
        </p>
  </span>

 
  <div className="flex flex-wrap gap-2 justify-center mt-2">
      {friend.tags.map((tag, index) => (
            <span key={index} className="badge badge-success">
              {tag}
            </span>
          ))}
</div>

  <p className="italic mt-3 text-sm text-gray-500">
    "{friend.bio}"
  </p>

  <p className="text-sm mt-2 text-gray-400">
    Preferred: email
  </p>
  
<div className="mt-6 flex flex-col gap-2 w-full">
    <button className="btn btn-outline w-full">Snooze 2 Weeks</button>
    <button className="btn btn-outline w-full">Archive</button>
    <button className="btn btn-error btn-outline w-full">Delete</button>
  </div>
</div>

     
      <div className="lg:col-span-2 flex flex-col gap-6 h-full">

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 p-4 text-center shadow">
            <h2 className="text-2xl font-bold">{friend.days_since_contact}</h2>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="card bg-base-100 p-4 text-center shadow">
            <h2 className="text-2xl font-bold">{friend.goal}</h2>
            <p className="text-sm text-gray-500">Goal (Days)</p>
          </div>

          <div className="card bg-base-100 p-4 text-center shadow">
            <h2 className="text-xl font-bold">
              {friend.next_due_date}
            </h2>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

      
        <div className="card bg-base-100 p-5 shadow">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Relationship Goal</h3>
            <button className="btn btn-sm">Edit</button>
          </div>
          <p className="mt-2 text-gray-600">
            Connect every <b>{friend.goal} days</b>
          </p>
        </div>

      
        <div className="card bg-base-100 p-5 shadow">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">
            <button onClick={()=>handleAddData("call",friend)}
            className="btn"><FiPhoneCall /> Call</button>
            <button onClick={()=>handleAddData("Text",friend)}
            className="btn"><MdOutlineTextsms /> Text</button>
            <button onClick={()=>handleAddData("video-call",friend)}
            className="btn"><LuVideo /> Video</button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Detail;