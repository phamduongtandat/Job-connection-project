import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useGetAuthInfo from "./../../hooks/useGetAuthInfo";
import { useEffect } from "react";
function JobTab({ children }) {
  const { user } = useGetAuthInfo();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("job-list");
  }, []);
  return (
    <div className="mx-20">
      <div className="my-7 mx-auto text-sm font-medium text-center text-gray-500 border-b  border-yellow-300 ">
        <ul className="flex justify-evenly flex-wrap -mb-px">
          <li className="mr-2">
            <NavLink
              to="job-list"
              className={({ isActive }) =>
                `block hover:border-b-solid hover:border-dashed hover:border hover:border-b-white hover:border-yellow-400 text-xl w-96 px-4 py-4 font-bold leading-10 rounded-t-xl ${
                  isActive
                    ? "font-medium border border-b-white  border-yellow-300"
                    : ""
                }`
              }
            >
              Danh sách việc làm
            </NavLink>
          </li>

          <li className="mr-2">
            <NavLink
              to={`applied-jobs/${user?._id}`}
              className={({ isActive }) =>
                `block hover:border-b-solid hover:border-dashed hover:border hover:border-b-white hover:border-yellow-400 text-xl w-96 px-4 py-4 font-bold leading-10 rounded-t-xl ${
                  isActive
                    ? "font-medium  border border-b-white  border-yellow-300"
                    : ""
                }`
              }
            >
              Công việc đã ứng tuyển
            </NavLink>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default JobTab;
