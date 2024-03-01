import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-svh flex items-center justify-center flex-col gap-y-6">
      <h1 className="text-8xl font-bold">Rearticle</h1>
      <Link
        to="/dashboard"
        className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
      >
        Dashboard
      </Link>
    </div>
  );
};

export default HomePage;
