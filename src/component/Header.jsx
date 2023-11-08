import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center h-12 text-lg font-semibold gap-6 mb-5 shadow-lg fixed w-full bg-gray-300 ">
      <Link
        className=" border-b-2 border-gray-500 cursor-pointer hover:scale-[1.1]"
        to="/"
      >
        Pagination
      </Link>
      <Link
        className=" border-b-2 border-gray-500 cursor-pointer hover:scale-[1.1]"
        to="/infinite-scroll"
      >
        InfiniteScroll
      </Link>
    </div>
  );
};

export default Header;
