import React, { useState } from 'react'

function SortFilter() {

    const contents = ['Ngày đăng tuyển', 'Ngày hết hạn', 'Số lượng ứng viên']
    const [isShow, setIsShow] = useState(false)
    const [selectedS, setselectedS] = useState('')

    return (
        <div className="relative z-[9] flex flex-col gap-2 ">
            {/* Khung bao input và dấu */}
            <div className=" my-2 flex rounded border border-gray-200 bg-white p-1">
                {/* <input defaultValue=""
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    placeholder='Sắp xếp theo'
                /> */}
                <div className={`w-full appearance-none p-1 lg:w-48 px-2 ${selectedS ? 'text-black' : 'text-gray-400'}  outline-none`}>{selectedS || 'Sắp xếp theo'}</div>




                {/* Dấu mũi tên */}
                <div className=" bg-teal-200 flex w-8 items-center rounded-md  py-1 pl-2 pr-1">
                    <button
                        onClick={() => {
                            localStorage.setItem('sFilter', JSON.stringify(''))
                            setselectedS('')
                            setIsShow(!isShow)
                        }}
                        className="h-6 w-6 cursor-pointer text-gray-600 outline-none focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up h-4 w-4">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Khung Option */}
            <div className={`absolute top-full  w-full h-60  rounded-md drop-shadow-lg 
            ${isShow ? '' : 'hidden'}`}>
                <div className="flex  rounded-md flex-col">


                    {contents.map(i => {
                        return (
                            <div key={i}
                                onClick={() => {
                                    localStorage.setItem('sFilter', JSON.stringify(i))
                                    setselectedS(i)
                                    setIsShow(!isShow)
                                }}
                                className=" cursor-pointer  border-b border-gray-100 hover:bg-teal-100">
                                <div className="relative  flex w-full items-center border-l-2 border-teal-600 border-transparent bg-white p-2 pl-2 hover:bg-teal-600 hover:text-teal-100">
                                    <div className="flex w-full items-center">
                                        <div className="mx-2 leading-6">{i}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>

    )
}

export default SortFilter
