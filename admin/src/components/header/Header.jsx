import clsx from "clsx";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/api/useAuth";

const Header = ({ user }) => {
  const { useLogout } = useAuth(); // ✅ gọi trong body function component

  const logoutMutation = useLogout(); // ✅ hook được gọi đúng chỗ

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 px-5 py-2 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Search */}
        <div className="flex items-center gap-2 px-3 border border-gray-300 rounded-xl">
          <FaSearch />
          <input
            id="search-input"
            name="search"
            placeholder="Search..."
            className="p-2 border-none outline-none text-dark placeholder:text-gray-500"
            type="text"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-5 text-sm">
          {/* User info */}
          <div className="text-right">
            {user ? (
              <>
                <h1 className="font-medium capitalize text-dark">
                  {user.name || "username"}
                </h1>
                <h2 className="text-xs text-gray-500">
                  {user.email || "user@gmail.com"}
                </h2>
              </>
            ) : (
              <h1 className="italic font-medium text-gray-400">
                Chưa đăng nhập
              </h1>
            )}
          </div>

          {/* Avatar dropdown */}
          <div className="relative cursor-pointer group">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={
                user?.avatar ||
                "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
              }
              alt="avatar"
            />
            <div
              className={clsx(
                "invisible absolute right-0 z-50 w-64 shadow-lg",
                "translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
              )}
            >
              <div className="p-5 mt-2 bg-white rounded-lg">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-300">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={
                      user?.avatar ||
                      "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
                    }
                    alt="avatar"
                  />
                  <div className="max-w-[160px] truncate">
                    <h1 className="capitalize text-dark">
                      {user?.name || "User Name"}
                    </h1>
                    <h2 className="text-xs text-gray-500">
                      {user?.email || "usernameemail@gmail.com"}
                    </h2>
                  </div>
                </div>
                <ul className="flex flex-col py-2 capitalize">
                  <li className="px-4 py-2 transition-all rounded-lg hover:text-primary hover:bg-gray-100">
                    <Link to="/admin/auth" className="block w-full text-left">
                      đăng nhập
                    </Link>
                  </li>
                  <li className="px-4 py-2 transition-all rounded-lg hover:text-primary hover:bg-gray-100">
                    <Link
                      to="/admin/user-profile"
                      className="block w-full text-left"
                    >
                      hồ sơ & tài khoản
                    </Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 transition-all rounded-lg cursor-pointer hover:text-primary hover:bg-gray-100"
                  >
                    đăng xuất
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
