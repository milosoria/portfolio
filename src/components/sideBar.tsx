import React, { useState } from 'react'
import { AiOutlineContacts, AiOutlineGithub } from 'react-icons/ai'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { TiArrowLeftThick, TiThMenu } from 'react-icons/ti'
import { Link, Outlet } from 'react-router-dom'

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    // TODO: change this so for mobile its a popup
    return (
        <div className="flex">
            <button
                className={
                    'absolute z-50 p-5 ' + (isOpen ? 'invisible' : 'visible')
                }
                onClick={() => setIsOpen(!isOpen)}
            >
                <TiThMenu
                    className="hover:opacity-60 focus:opacity-60"
                    color="black"
                    size="30"
                />
            </button>
            <div
                className={
                    'absolute inset-0 h-full flex-col bg-black-200 p-5 text-white duration-300 ease-in-out sm:w-40 md:w-48 lg:w-52 ' +
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
                            className="hover:opacity-60 focus:opacity-60"
                            color="white"
                            size="30"
                        />
                    </button>
                </div>
                <div className="ml-5 mt-5 w-5/6 space-y-4 divide-y-2 divide-solid divide-white ">
                    <div className="flex">
                        <Link
                            to="/"
                            className="w-5/6 text-lg font-light italic hover:opacity-60 focus:opacity-60"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            About me
                        </Link>
                        <BsPersonBoundingBox
                            className="mt-1 self-center"
                            size="25"
                        />
                    </div>
                    <div className="flex">
                        <Link
                            to="/projects"
                            className="w-5/6  text-lg font-light italic hover:opacity-60 focus:opacity-60"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Projects
                        </Link>
                        <FaLaptopCode className="mt-1 self-center" size="25" />
                    </div>
                    <div className="flex">
                        <Link
                            to="/curriculum"
                            className="w-5/6  text-lg font-light italic hover:opacity-60 focus:opacity-60"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Curriculum
                        </Link>
                        <HiOutlineClipboardDocumentList
                            className="mt-1 self-center"
                            size="25"
                        />
                    </div>
                </div>
                <div className="fixed bottom-5 flex w-4/5 flex-row items-center space-x-2 self-center">
                    <a
                        className="flex flex-1 flex-col items-center hover:opacity-60 focus:opacity-60"
                        href="mailto:camilo.soria@uc.cl"
                    >
                        <AiOutlineContacts size="25" />
                        <h3 className="text-white hover:underline focus:underline">
                            Contact
                        </h3>
                    </a>
                    <a
                        className="flex flex-1 flex-col items-center hover:opacity-60 focus:opacity-60"
                        href="https://www.github.com/milosoria"
                    >
                        <AiOutlineGithub size="25" />
                        <h3 className="text-white hover:underline focus:underline">
                            GitHub
                        </h3>
                    </a>
                </div>
            </div>

            <div
                className={
                    'duration-300 ease-in-out ' +
                    (isOpen
                        ? 'sm:translate-x-40  md:translate-x-48 lg:translate-x-52'
                        : '-translate-x-0')
                }
            >
                <Outlet />
            </div>
        </div>
    )
}

export default SideBar
