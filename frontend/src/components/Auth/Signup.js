const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/3">
        <form
          onSubmit={handleSignup}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <p className="py-6 text-3xl font-bold">Signup</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow-md rounded-md w-full py-2 px-3 text-gray-700"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="shadow-md rounded-md w-full py-2 px-3 text-gray-700"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
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
          <button className="btn btn-warning btn-sm" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
