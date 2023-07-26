import React from 'react'
import useGetCVs from './../../react-query/cv/useGetCVs';

function CVDropDown({ isCVList, choseCV }) {
    const { CVs } = useGetCVs()

    return (
        <div className={`absolute top-full mt-2 w-60  sm:w-full h-60 ${isCVList ? '' : 'hidden'}   drop-shadow-lg`}>
            <div className="flex  rounded-md flex-col">

                <div className=" cursor-pointer px-1 pt-1 rounded-lg  border-2 border-gray-100 bg-white">
                    {CVs?.CVs?.length === 0
                        ? <div className=" italic rounded-md font-semibold  text-green-700">
                            Bạn chưa có lưu trữ CV nào, hãy vào mục Quản lý CV ở góc phải trên cùng màn hình.
                        </div>
                        : CVs?.CVs.map(i => <div
                            key={i.name}
                            className="relative h-24 rounded-md flex w-full items-center bg-teal-100 border-l-2 border-teal-600 border-transparent pl-2 mb-1  hover:bg-teal-600 hover:text-teal-100">

                            <div className=" w-full ">

                                <div className="mx-2 leading-6">{i.name}</div>

                                <div className="flex justify-around w-full items-center">

                                    <a className='bg-orange-300 hover:bg-green-500 font-semibold text-white px-5 rounded-md' href={i.file} target="_blank" rel="noopener noreferrer">XEM</a>

                                    <button
                                        onClick={() => { choseCV({ name: i.name, file: i.file }) }}
                                        className='bg-orange-300 hover:bg-green-500 font-semibold text-white px-5 rounded-md' type="button">CHỌN</button>

                                </div>

                            </div>
                        </div>)}


                </div>


            </div>
        </div>
    )
}

export default CVDropDown
