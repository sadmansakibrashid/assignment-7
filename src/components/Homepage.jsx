import { FaPlus } from "react-icons/fa";


const Homepage = () => {
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

    </div>
   
    
    );
};

export default Homepage;