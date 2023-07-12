import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useGetAuthInfo from './../../hooks/useGetAuthInfo';
import { useEffect } from 'react';

function JobTab({ children, tab1, tab2, navi, button, setIsSwitch, isSwitch }) {
  const { user } = useGetAuthInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (navi) {
      navigate(navi);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="  my-7  text-sm font-medium text-center text-purple-600 border-b  border-yellow-300 ">
        <ul className="grid grid-cols-2 -mb-px  ">
          <li>
            {button ? (
              <button
                onClick={() => {
                  setIsSwitch(true);
                }}
                className={`block hover:border-b-solid hover:border-r-0 hover:border-dashed hover:border hover:border-b-white hover:border-yellow-400 text-xl w-[600px]  py-4 font-bold leading-10 rounded-t-xl ${
                  isSwitch
                    ? 'font-medium border border-b-white  border-yellow-300 hover:border-r'
                    : 'text-gray-400'
                }`}
              >
                {tab1}
              </button>
            ) : (
              <NavLink
                to="job-list"
                className={({ isActive }) =>
                  `block hover:border-b-solid hover:border-r-0  hover:border-dashed hover:border hover:border-b-white hover:border-yellow-400 text-xl w-[600px]  py-4 font-bold leading-10 rounded-t-xl ${
                    isActive
                      ? 'font-medium border border-b-white  border-yellow-300 hover:border-r'
                      : 'text-gray-400'
                  }`
                }
              >
                {tab1}
              </NavLink>
            )}
          </li>

          <li>
            {button ? (
              <button
                onClick={() => {
                  setIsSwitch(false);
                }}
                className={`block hover:border-b-solid hover:border-l-0 hover:border-dashed hover:border hover:border-b-white hover:border-yellow-400 text-xl w-[600px]  py-4 font-bold leading-10 rounded-t-xl ${
                  isSwitch
                    ? 'text-gray-400'
                    : 'font-medium  border border-b-white  border-yellow-300  hover:border-l'
                }`}
              >
                {tab2}
              </button>
            ) : (
              <NavLink
                to={`applied-jobs/${user?._id}`}
                className={({ isActive }) =>
                  `block hover:border-b-solid hover:border-l-0 hover:border-dashed hover:border hover:border-b-white hover:border-yellow-400 text-xl w-[600px]  py-4 font-bold leading-10 rounded-t-xl ${
                    isActive
                      ? 'font-medium  border border-b-white  border-yellow-300  hover:border-l'
                      : 'text-gray-400'
                  }`
                }
              >
                {tab2}
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default JobTab;
