import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto px-6 container">
          <nav
            aria-label="main navigation"
            className="flex h-[11.5rem] md:h-[5.5rem] w-full items-stretch md:justify-between justify-center font-medium text-slate-700 flex-col md:flex-row"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              aria-current="page"
              className="flex items-center md:justify-start justify-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              to="/"
            >
              <svg
                width="200"
                height="101.7762228540245"
                viewBox="0 0 349.99999999999994 89.95373232047618"
                className="css-1j8o68f -mt-4"
              >
                <defs id="SvgjsDefs1417"></defs>
                <g
                  id="SvgjsG1418"
                  featurekey="ptiKCW-0"
                  transform="matrix(4.5010291245485,0,0,4.5010291245485,-2.4305547507088288,-0.06686948681524996)"
                  fill="#0D9488"
                >
                  <path d="M4.86 19.64 q0 0.16 -0.1 0.26 t-0.26 0.1 l-2.88 0 q-0.46 0 -0.77 -0.31 t-0.31 -0.77 l0 -5.76 q0 -0.46 0.31 -0.77 t0.77 -0.31 l1.44 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -3.24 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -1.44 q0 -0.46 0.31 -0.77 t0.77 -0.31 l2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 4.68 q0 0.46 -0.31 0.77 t-0.77 0.31 l-2.88 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 3.6 q0 0.16 0.1 0.26 t0.26 0.1 l2.16 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 0.72 z M10.260000000000002 19.64 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -11.16 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 10.44 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 q0 -0.16 0.1 -0.26 t0.26 -0.1 l2.88 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.88 z M14.58 6.68 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.16 q0 0.46 -0.31 0.77 t-0.77 0.31 l-2.88 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 q0 -0.16 0.1 -0.26 t0.26 -0.1 l2.88 0 z M14.22 8.48 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 9 q0 0.16 0.1 0.26 t0.26 0.1 l0.72 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -9.72 z M22.860000000000003 20 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -11.16 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -0.72 q0 -0.16 0.1 -0.26 t0.26 -0.1 l3.6 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 0.72 q0 0.16 -0.1 0.26 t-0.26 0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 10.44 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 z M26.82 20 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 q0 -0.16 0.1 -0.26 t0.26 -0.1 l0.72 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 12.6 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 z M28.98 7.039999999999999 q0 -0.16 0.1 -0.26 t0.26 -0.1 l2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 q0 -0.46 0.31 -0.77 t0.77 -0.31 l1.44 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.88 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -11.16 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 10.44 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -11.16 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 10.44 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 z M38.339999999999996 20 q-0.46 0 -0.77 -0.31 t-0.31 -0.77 l0 -11.16 q0 -0.46 0.31 -0.77 t0.77 -0.31 l2.88 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 0.72 q0 0.16 -0.1 0.26 t-0.26 0.1 l-3.6 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 3.96 q0 0.16 0.1 0.26 t0.26 0.1 l0.72 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 0.72 q0 0.16 -0.1 0.26 t-0.26 0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 2.16 q0 0.16 0.1 0.26 t0.26 0.1 l2.16 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 0.72 q0 0.16 -0.1 0.26 t-0.26 0.1 l-2.88 0 z M50.22 6.68 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.88 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -4.32 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 3.6 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -11.88 q0 -0.46 0.31 -0.77 t0.77 -0.31 l2.16 0 z M49.86 8.48 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 3.96 q0 0.16 0.1 0.26 t0.26 0.1 l0.72 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -4.68 z M56.699999999999996 13.16 q0 0.46 -0.31 0.77 t-0.77 0.31 q0.46 0 0.77 0.31 t0.31 0.77 l0 4.32 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -4.32 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 3.6 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 q0 -0.16 0.1 -0.26 t0.26 -0.1 l2.88 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 5.4 z M55.26 8.48 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 3.96 q0 0.16 0.1 0.26 t0.26 0.1 l0.72 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -4.68 z M61.019999999999996 6.68 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.16 q0 0.46 -0.31 0.77 t-0.77 0.31 l-2.16 0 q-0.46 0 -0.77 -0.31 t-0.31 -0.77 l0 -11.16 q0 -0.46 0.31 -0.77 t0.77 -0.31 l2.16 0 z M60.66 8.48 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 9 q0 0.16 0.1 0.26 t0.26 0.1 l0.72 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -9.72 z M64.25999999999999 6.68 q0.16 0 0.26 0.1 t0.1 0.26 l0 10.44 q0 0.46 -0.31 0.77 t-0.77 0.31 l2.16 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -11.16 q0 -0.16 0.1 -0.26 t0.26 -0.1 l0.72 0 q0.16 0 0.26 0.1 t0.1 0.26 l0 12.6 q0 0.16 -0.1 0.26 t-0.26 0.1 l-2.88 0 q-0.46 0 -0.77 -0.31 t-0.31 -0.77 l0 -11.88 q0 -0.16 0.1 -0.26 t0.26 -0.1 l0.72 0 z M72.89999999999999 19.64 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -11.16 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 10.44 q0 0.16 -0.1 0.26 t-0.26 0.1 l-0.72 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 q0 -0.16 0.1 -0.26 t0.26 -0.1 l2.88 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.88 z M77.22 6.68 q0.46 0 0.77 0.31 t0.31 0.77 l0 11.16 q0 0.46 -0.31 0.77 t-0.77 0.31 l-2.88 0 q-0.16 0 -0.26 -0.1 t-0.1 -0.26 l0 -12.6 q0 -0.16 0.1 -0.26 t0.26 -0.1 l2.88 0 z M76.86 8.48 q0 -0.16 -0.1 -0.26 t-0.26 -0.1 l-2.16 0 q0.46 0 0.77 0.31 t0.31 0.77 l0 9 q0 0.16 0.1 0.26 t0.26 0.1 l0.72 0 q0.16 0 0.26 -0.1 t0.1 -0.26 l0 -9.72 z"></path>
                </g>
              </svg>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <div className="flex items-center md:justify-start justify-center">
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
              <label
                htmlFor="orderDrawer"
                className="btn border-0 bg-teal-500 hover:bg-teal-700 px-6 drawer-button mr-8 lg:hidden"
              >
                Open Sidebar
              </label>
            </div>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-[85px] left-0 z-[-1] h-[24.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <NavLink
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/"
                  activeclassname="active"
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/blog"
                >
                  <span>Blog</span>
                </NavLink>
              </li>

              {user?.uid ? (
                <>
                  <li role="none" className="flex items-stretch">
                    <NavLink
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/dashboard"
                    >
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <button
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      onClick={handleLogOut}
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    >
                      <span>Log Out</span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li role="none" className="flex items-stretch">
                    <NavLink
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/login"
                    >
                      <span>Login</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
