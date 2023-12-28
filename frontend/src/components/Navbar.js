import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto px-28 flex justify-between items-center">
        <div className="flex items-center mr-24">
          <Link
            to="/"
            className="text-gray-800 text-2xl font-bold hover:text-blue-700 transition duration-300"
          >
            DB Market
          </Link>
        </div>
        <div className="flex gap-12">
          <Link
            to="/cart"
            className="text-gray-800 hover:text-blue-700 transition duration-300"
          >
            Cart
          </Link>
          <Link
            to="/product"
            className="text-gray-800 hover:text-blue-700 transition duration-300"
          >
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
