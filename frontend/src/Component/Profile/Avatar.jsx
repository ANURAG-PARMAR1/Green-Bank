import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

export function Avatar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section className="bg-gray-2 dark:bg-dark pr-10">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-left"
            >
              <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
                <img
                  src="https://cdn.tailgrids.com/2.2/assets/core-components/images/avatar/image-05.jpg"
                  alt="avatar"
                  className="h-full w-full rounded-full object-cover object-center"
                />
                <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
              </div>
              <span className="text-base font-medium text-dark dark:text-white">
                Himanshu Dhapola
              </span>
              {/* <span className="pl-[10px] text-dark duration-100 dark:text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${dropdownOpen ? "-scale-y-100" : ""}`}
                >
                  <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" />
                </svg>
              </span> */}
            </button>
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute shadow-lg right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
            >
              <NavLink to='profile'>
              <p
                className="block w-full rounded cursor-pointer px-3 py-2 text-left text-sm text-gray-500 hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
              >
                Profile
              </p>
              </NavLink>
              <p
                className="block w-full rounded cursor-pointer px-3 py-2 text-left text-sm text-gray-500 hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
              >
                Settings
              </p>
              <p
                className="block w-full rounded cursor-pointer px-3 py-2 text-left text-sm text-gray-500 hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
              >
                Sign Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
