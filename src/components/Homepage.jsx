import { use } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const friendsPromise = fetch("/friends.json").
then((res)=>res.json());
const Homepage = () => {
    const friends = use(friendsPromise);
    return (
         <div className="container mx-auto min-h-screen flex flex-col items-center text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">
        Friends to keep close in your life
      </h2>

      <p className="text-gray-600 mb-6 max-w-xl">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>

      <button className="btn btn-success flex items-center gap-2">
        <FaPlus />
        Add a Friend
      </button>
        <div className="flex gap-4 justify-center mt-8">
  <div className="bg-white shadow rounded-xl p-6 w-40 text-center">
    <h3 className="text-2xl font-bold">10</h3>
    <p className="text-gray-500">Total Friends</p>
  </div>

  <div className="bg-white shadow rounded-xl p-6 w-40 text-center">
    <h3 className="text-2xl font-bold ">3</h3>
    <p className="text-gray-500">On Track</p>
  </div>

  <div className="bg-white shadow rounded-xl p-6 w-40 text-center">
    <h3 className="text-2xl font-bold">6</h3>
    <p className="text-gray-500">Need Attention</p>
  </div>

  <div className="bg-white shadow-sm rounded-xl p-6 w-40 text-center">
    <h3 className="text-2xl font-bold">12</h3>
    <p className="text-gray-500">Interactions This Month</p>
  </div>
</div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
           
            {
                friends.map((friend)=>
                {
                    return (
                    <Link to={`/${friend.id}`} className="card bg-base-100 w-96 shadow-sm" key={friend.id}>
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p className="text-gray-500">{friend.days_since_contact} d ago</p>
<div className="flex flex-wrap gap-2 justify-center mt-2">
      {friend.tags.map((tag, index) => (
            <span key={index} className="badge badge-success">
              {tag}
            </span>
          ))}
</div>
 <p className={`badge 
          ${friend.status === "overdue" ? "badge-error" : ""}
          ${friend.status === "almost due" ? "badge-warning" : ""}
          ${friend.status === "on-track" ? "badge-success" : ""}
        `}>
          {friend.status}
        </p>
  
  </div>
</Link>
                    );
                    
                }
                )
            }
        </div> 
    


    </div>
   
    
    );
};

export default Homepage;