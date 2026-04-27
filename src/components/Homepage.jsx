import { use } from "react";
import { FaPlus } from "react-icons/fa";

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
                    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                    );
                    
                }
                )
            }
        </div> 
    


    </div>
   
    
    );
};

export default Homepage;