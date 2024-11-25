import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/" className="p-3 text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="p-3 text-xl">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="p-3 text-xl">
          Register
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/orders" className="p-3 text-xl">
            Orders
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/profile" className="p-3 text-xl">
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign out successfully!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <small>{user.email}</small>
            <button className="btn btn-error" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
