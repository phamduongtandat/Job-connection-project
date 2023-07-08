import { Link, useParams } from "react-router-dom";

import useGetAppliedJobs from "./../../../react-query/jobs/useGetAppliedJobs";

import JobItem from "../../../components/job/JobItem";

const AppliedJobs = () => {
  const { id } = useParams();
  const { appliedJobs } = useGetAppliedJobs({ id });
  return (
    <div>
      {appliedJobs?.map((item) => (
        <JobItem
          key={item._id}
          status={item.candidateList.filter((x) => x.user === id)[0].status}
          item={item}
        />
      ))}
    </div>

    // <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
    //   {/* <div className="flex items-center justify-center mb-4">
    //     <h5 className="text-xl font-bold leading-10 text-primary-focus">
    //       CÔNG VIỆC ĐÃ ỨNG TUYỂN
    //     </h5>
    //   </div> */}

    //   <div className="flow-root">
    //     <ul
    //       //role="list"
    //       className="divide-y divide-gray-200"
    //     >
    //       {appliedJobs?.map((item) => (
    //         <li
    //           key={item._id}
    //           className="p-3 sm:py-4 tracking-wide  hover:bg-base hover:rounded-t-xl"
    //         >
    //           <div className="flex items-center space-x-4  ">
    //             <div className="flex-1 min-w-0 ">
    //               <div className="flex items-center gap-2 ">
    //                 <Link
    //                   to={`/jobs/${item._id}`}
    //                   className="text-xl font-extralight uppercase text-light "
    //                 >
    //                   {item.title}
    //                 </Link>

    //                 <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-1 py-0.5 rounded   ">
    //                   {
    //                     item.candidateList.filter((x) => x.user === id)[0]
    //                       .status
    //                   }
    //                 </span>
    //               </div>

    //               <p className="text-sm uppercase leading-7 text-gray-500 ">
    //                 Tên doanh nghiệp {item.name}
    //               </p>

    //               <p className="text-sm flex gap-2 text-gray-500 ">
    //                 <span>
    //                   <FaMapMarkerAlt size={16} />
    //                 </span>
    //                 <span>{item.workLocation}</span>
    //               </p>

    //               <p className="text-sm font-medium leading-7 text-blue-400 ">
    //                 {item.salary}
    //               </p>
    //             </div>

    //             <div className=" items-center italic font-semibold">
    //               <p className=" font-normal leading-8 uppercase text-gray-600 ">
    //                 {item.field}
    //               </p>

    //               <div className="text-sm  text-green-500 font-medium ">
    //                 Ngày đăng: {formatDate(item.createdAt, true)}
    //               </div>

    //               <div className="text-sm  text-red-300 font-medium ">
    //                 Hạn ứng tuyển: {formatDate(item.deadlineDate, true)}
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default AppliedJobs;
