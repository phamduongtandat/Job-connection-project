import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useGetAuthInfo from "./../../hooks/useGetAuthInfo";
import { useEffect } from "react";

function JobTab({ children, tab1, tab2, navi, button, setIsSwitch, isSwitch }) {
  const { user } = useGetAuthInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (navi) {
      navigate(navi);
    }
  }, []);

  return (
    <div className="mx-32 my-10  ">
      <div className="  text-sm font-medium text-center text-purple-600">
        <ul className="w-full flex justify-between ">
          <li className=" w-[50%]  -mb-px ">
            {button ? (
              <button
                onClick={() => {
                  setIsSwitch(true);
                }}
                className={`block text-xl py-7 mx-auto font-bold leading-10 rounded-t-xl hover:border-b-solid  hover:border-dashed hover:border hover:w-full hover:border-b-white hover:border-yellow-400  ${isSwitch
                  ? "font-medium border border-b-white w-full border-yellow-300 hover:border-r"
                  : "text-gray-400 hover:border-r-0"
                  }`}
              >
                {tab1}
              </button>
            ) : (
              <NavLink
                to="job-list"
                className={({ isActive }) =>
                  `block text-xl py-7 mx-auto font-bold leading-10 rounded-t-xl hover:border-b-solid  hover:border-dashed hover:border hover:w-full hover:border-b-white hover:border-yellow-400 ${isActive
                    ? "font-medium border border-b-white w-full border-yellow-300 hover:border-r"
                    : "text-gray-400 hover:border-r-0"
                  }`
                }
              >
                {tab1}
              </NavLink>
            )}
          </li>

          <li className=" w-[50%]  -mb-px">
            {button ? (
              <button
                onClick={() => {
                  setIsSwitch(false);
                }}
                className={`block text-xl mx-auto py-7 font-bold leading-10 rounded-t-xl hover:border-b-solid  hover:border-dashed hover:border hover:w-full hover:border-b-white hover:border-yellow-400  ${isSwitch
                  ? "text-gray-400 hover:border-l-0"
                  : "font-medium  border border-b-white w-full py-7 border-yellow-400 hover:border-l-1"
                  }`}
              >
                {tab2}
              </button>
            ) : (
              <NavLink
                to={`applied-jobs/${user?._id}`}
                className={({ isActive }) =>
                  `block text-xl mx-auto py-7 font-bold leading-10 rounded-t-xl hover:border-b-solid  hover:border-dashed hover:border hover:w-full hover:border-b-white hover:border-yellow-400 ${isActive
                    ? "font-medium  border border-b-white w-full py-7 border-yellow-400 hover:border-l-1"
                    : "text-gray-400 hover:border-l-0"
                  }`
                }
              >
                {tab2}
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="border  border-yellow-300">
        {children}
      </div>
    </div>
  );
}

export default JobTab;
