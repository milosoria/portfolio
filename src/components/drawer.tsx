import React, { useState } from 'react'
import { TiArrowLeftThick, TiThMenu } from 'react-icons/ti'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'

const Drawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    // TODO: change this so for mobile its a popup
    return (
        <>
            <button
                className={
                    'z-50 flex  p-5 ' + (isOpen ? 'invisible' : 'visible')
                }
                onClick={() => setIsOpen(!isOpen)}
            >
                <TiThMenu
                    className="hover:opacity-80"
                    color="black"
                    size="30"
                />
            </button>
            <div
                className={
                    'fixed inset-0 h-full flex-col items-end bg-black-200  p-5 text-white duration-300 ease-in-out sm:w-40 md:w-48 lg:w-52 ' +
                    (isOpen ? 'translate-x-0 ' : '-translate-x-full')
                }
            >
                <div className="flex flex-row">
                    <h2 className="flex-1 align-middle text-2xl font-semibold text-white">
                        Index
                    </h2>
                    <button
                        className="align-middle"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <TiArrowLeftThick
                            className="hover:opacity-80"
                            color="white"
                            size="30"
                        />
                    </button>
                </div>
                <div className="ml-5 mt-5 w-5/6 space-y-4 divide-y-2 divide-solid divide-white ">
                    <div className="flex">
                        <a
                            className="w-5/6 text-lg font-light italic hover:opacity-80"
                            href=""
                        >
                            About me
                        </a>
                        <BsPersonBoundingBox
                            className="mt-1 self-center"
                            size="25"
                        />
                    </div>
                    <div className="flex">
                        <a
                            className="w-5/6  text-lg font-light italic hover:opacity-80"
                            href=""
                        >
                            Projects
                        </a>
                        <FaLaptopCode className="mt-1 self-center" size="25" />
                    </div>
                    <div className="flex">
                        <a
                            className="w-5/6  text-lg font-light italic hover:opacity-80"
                            href=""
                        >
                            Curriculum
                        </a>
                        <HiOutlineClipboardDocumentList
                            className="mt-1 self-center"
                            size="25"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer
