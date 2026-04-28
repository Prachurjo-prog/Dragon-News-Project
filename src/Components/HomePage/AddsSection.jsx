import { FaGoogle } from "react-icons/fa6";

const AddsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Login With</h2>
      <div className="items-center flex flex-col gap-3 mt-6">
        <button className="btn btn-outline border w-full border-blue-500 text-blue-500 items-center flex">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline border w-full border-gray-700  items-center flex">
          <FaGoogle /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default AddsSection;
