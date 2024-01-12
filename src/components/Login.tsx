// Import React and React-Router-Dom libraries

export const Login = () => {
  return (
    <div className="flex h-screen bg-blue-600">
      <div className="flex flex-col items-center justify-center w-1/2 bg-gray-200 text-blue-600">
        <h1 className="text-8xl font-bold">facebook</h1>
        <p className="text-2xl">
          Connect with friends and the world around you on facebook
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium"
              >
                Email hoặc số điện thoại
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Đăng nhập
              </button>
            </div>
            <div className="mb-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
          </form>
          <div className="border-t border-gray-300 pt-4">
            <button className="w-full px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Tạo tài khoản mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
