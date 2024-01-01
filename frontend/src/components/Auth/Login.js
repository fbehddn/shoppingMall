import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/3">
        <form
          onSubmit={handleLogin}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <p className="py-6 text-3xl font-bold">Login</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              ID
            </label>
            <input
              className="shadow-md rounded-md w-full py-2 px-3 text-gray-700"
              id="id"
              type="text"
              placeholder="UserID"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-md rounded-md w-full py-2 px-3 text-gray-700"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn btn-info btn-sm" type="submit">
            Login
          </button>
          <Link to="/signup">
            <p className="pt-6 text-red-500 underline">
              If you don't have account, click here!
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
