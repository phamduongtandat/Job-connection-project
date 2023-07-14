import React, { useRef, useState } from 'react'
import { BsFillCloudSlashFill } from 'react-icons/bs';
import { IoMdCloudUpload } from "react-icons/io";

function ApplyForm({ jobDetail }) {
    const fileRef = useRef(null)
    const [pickFile, setpickFile] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='m-7'>
            <div className="relative min-h-screen flex items-center justify-center py-12 px-4 rounded-3xl bg-no-repeat bg-cover "
                style={
                    {
                        backgroundImage: 'url(https://pixabay.com/get/gf1c24bba9e11ee9924fcf315150dc9335ae684e8aa15b97089fd9565bdd9fe19cfa7ab8596d78fd680f2ac6cb3842239_1280.jpg)'
                    }
                }
            >
                <div className="absolute rounded-3xl bg-gray-400 opacity-60 inset-0 z-0" />
                <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-5 text-2xl font-bold text-gray-900">
                            {jobDetail.title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">Chúng tôi rất vui khi bạn ứng tuyển.</p>
                    </div>

                    <form onSubmit={(e) => { handleSubmit(e) }} className="mt-8 space-y-3" >

                        <div className="grid grid-cols-1 space-y-2 mb-10">

                            <label className="text-sm font-bold text-gray-500 tracking-wide">Ghi chú:</label>

                            <textarea
                                rows="3" cols="20"
                                className=" p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                placeholder="Bạn có muốn để lại lời nhắn cho chúng tôi..."
                            />
                        </div>

                        <div className="grid grid-cols-1  space-y-2">

                            <label className="text-sm  font-bold text-gray-500 tracking-wide">
                                Nộp CV của bạn <span className="text-red-500">*</span>:
                            </label>

                            <div className="flex relative items-center justify-center w-full">
                                <label className="flex flex-col  rounded-lg border-4 border-dashed  hover:border-indigo-400 w-full h-60 p-11 group text-center">
                                    <div className="h-full  w-full flex flex-col  justify-center items-center  ">

                                        <div className="  max-h-48 w-2/5 mx-auto -mt-10">
                                            <img className=" h-36 object-center"
                                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                                alt="freepik image" />
                                            <div className={`absolute bg-white top-32 font-bold  h-5 w-56 z-0 left-1/4  text-[0.5rem] ${pickFile ? 'text-blue-700' : 'text-white'}`} >
                                                Đã chọn CV : {pickFile}
                                            </div>
                                        </div>

                                        <input type='file'
                                            onChange={({ target: { files } }) => {
                                                console.log(' đã có', files[0]?.name)
                                                setpickFile(files[0]?.name)

                                            }}
                                            ref={fileRef}
                                            hidden
                                            placeholder="Nhấn để chọn CV"
                                        />

                                        <div
                                            className="text-green-600 gap-2    p-2  items-center"
                                            onClick={(e) => { if (e.target.value) fileRef.current.click() }}
                                        >
                                            <i>Nhấn để chọn CV của bạn</i>
                                        </div>

                                    </div>

                                </label>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400">
                            <span>File types: pdf file and types of images - maxium 100MB</span>
                        </p>

                        <div>

                            <button
                                type="submit"
                                className="my-5 w-full flex justify-center items-center border gap-3 bg-blue-600 text-gray-100 p-3  rounded-2xl tracking-wide font-semibold focus:outline-none focus:shadow-outline  hover:border-green-600 hover:text-green-600 hover:bg-white shadow-lg cursor-pointer transition ease-in duration-300"
                            >
                                <IoMdCloudUpload color='green' size={40} />
                                <span className="text-xl" >Gửi yêu cầu</span>
                            </button>

                            <button
                                type="submit"
                                className="my-5 w-full flex justify-center items-center border gap-3 bg-blue-600 text-gray-100 p-3  rounded-2xl tracking-wide font-semibold focus:outline-none focus:shadow-outline  hover:border-red-600 hover:text-red-600 hover:bg-white shadow-lg cursor-pointer transition ease-in duration-300"
                            >
                                <BsFillCloudSlashFill color='red' size={35} />
                                <span className="text-xl" >Hủy yêu cầu</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default ApplyForm
