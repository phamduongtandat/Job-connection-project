import React from 'react'

function CVItem() {
    return (
        <div className="bg-[#F4F5FA] flex justify-around flex-wrap gap-7 lg:gap-16 pl-7 pr-10 sm:w-[500px] md:w-[500px] w-full lg:w-[900px] h-auto rounded-xl">


            <div className="flex md:w-[400px] sm:w-[300px] lg:w-[350px]  w-full justify-center items-center ">

                <div className="bg-blue-100  w-full rounded-xl mt-10 mb-14">

                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-full ">

                        <img src="https://ouch-cdn2.icons8.com/IGDeSHoI22ITIRZz-xvgcQAt6yJ-mW_K9t7sZu-boIs/rs:fit:256:295/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzIz/LzhlYWMzYmNmLWVm/YWMtNDYxMS1iNjE5/LTkwZTcxMTE3MGRl/ZS5zdmc.png" className="w-10" />

                        <div className="mt-3 font-semibold text-lg">Ice Mobile 10GB</div>


                        <div className='flex justify-around gap-7'>
                            <button className="bg-[#F4F5FA] p-2 w-1/2  rounded-full text-green-600 hover:bg-lime-200  border border-[#F0F0F6] shadow-xl mt-4">
                                XEM
                            </button>
                            <button className="bg-[#F4F5FA] p-2 w-1/2 rounded-full text-red-600 hover:bg-red-200 border border-[#F0F0F6] shadow-xl mt-4">
                                XÓA
                            </button>
                        </div>


                    </div>

                </div>

            </div>

            <div className="flex md:w-[400px] sm:w-[300px] lg:w-[350px]  w-full justify-center items-center ">

                <div className="bg-[#FFFBEC]  w-full rounded-xl mt-10 mb-14">

                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-full ">

                        <img src="https://img.icons8.com/?size=1x&id=43136&format=png" className="w-10" />
                        <div className="mt-3 font-semibold text-lg">CVPahmDuongTanDat</div>
                        <div className='flex justify-around gap-7'>
                            <button className="bg-[#F4F5FA] p-2 w-1/2  rounded-full text-green-600  border border-[#F0F0F6] shadow-xl mt-4">
                                XEM
                            </button>
                            <button className="bg-[#F4F5FA] p-2 w-1/2 rounded-full text-red-600  border border-[#F0F0F6] shadow-xl mt-4">
                                XÓA
                            </button>
                        </div>


                    </div>

                </div>

            </div>












        </div>
    )
}

export default CVItem
