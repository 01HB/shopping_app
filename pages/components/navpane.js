import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiBars3 } from "react-icons/hi2";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const NavPane = () => {

    const router = useRouter();
    const [navPaneOpen, setNavPaneOpen] = useState(false);

    const handleNavPaneOpen = (value) => {
        setNavPaneOpen(value);
    };



    return (
        <>
            <div onClick={() => handleNavPaneOpen(false)} className={`${navPaneOpen ? 'block' : 'hidden'} fixed z-[100] inset-0 bg-black/50`}></div>
            <div className={`absolute z-[101] top-0 left-0 transform ${navPaneOpen ? 'translate-x-0' : 'translate-x-[-100%]'} flex flex-col w-[240px] h-full bg-white transition-all duration-[200ms]`}>
                <div className="relative w-full h-fit">
                    {
                        navPaneOpen ?
                            <IoClose onClick={() => handleNavPaneOpen(false)} className="absolute top-0 left-[100%] inline w-8 h-8 text-white hover:text-slate-200 transition duration-200" />
                            :
                            <button onClick={() => handleNavPaneOpen(true)} className="absolute top-0 left-[100%] pl-4 pr-2 py-2 bg-white transition duration-200">
                                <HiBars3 onClick={() => handleNavPaneOpen(true)} className="inline w-8 h-8 text-black hover:text-slate-700" />
                            </button>
                    }
                </div>
                <div className="flex flex-col justify-between w-full h-full overflow-y-auto">
                    <div className="flex flex-col w-full h-fit">
                        <div className="flex w-full h-[100px] justify-center items-center py-4 bg-slate-100">
                            <p className="w-fit h-fit font-sans font-[600] text-[18px] leading-6 text-slate-700 italic text-center">
                                <span className="text-lime-600">POS</span> APP
                            </p>
                        </div>
                        <div className="flex flex-col w-full h-fit py-3 gap-y-[1px]">
                            <Link href="#" className={`flex justify-start items-center w-full h-fit pl-6 pr-3 py-3 bg-white hover:bg-blue-50 font-sans font-[500] text-[18px] leading-6 ${router.pathname === '' ? 'text-[#5C6AC4]' : 'text-slate-600'} hover:text-[#5C6AC4] rounded-[6px] transition duration-[250ms]`}>
                                <span className="flex items-center w-fit h-fit"><MdOutlineDashboard className="inline mr-3 w-[18px] h-[18px]" />Dashboard</span>
                            </Link>
                            <Link href="#" className={`flex justify-start items-center w-full h-fit pl-6 pr-3 py-3 bg-white hover:bg-blue-50 font-sans font-[500] text-[18px] leading-6 ${router.pathname === '' ? 'text-[#5C6AC4]' : 'text-slate-600'} hover:text-[#5C6AC4] rounded-[6px] transition duration-[250ms]`}>
                                <span className="flex items-center w-fit h-fit"><TfiLocationPin className="inline mr-3 w-[20px] h-[20px]" />Locations</span>
                            </Link>
                            <Link href="#" className={`flex justify-start items-center w-full h-fit pl-6 pr-3 py-3 bg-white hover:bg-blue-50 font-sans font-[500] text-[18px] leading-6 ${router.pathname === '' ? 'text-[#5C6AC4]' : 'text-slate-600'} hover:text-[#5C6AC4] rounded-[6px] transition duration-[250ms]`}>
                                <span className="flex items-center w-fit h-fit"><LiaFileInvoiceDollarSolid className="inline mr-3 w-[20px] h-[20px]" />POS Invoices</span>
                            </Link>
                            <Link href="#" className={`flex justify-start items-center w-full h-fit pl-6 pr-3 py-3 bg-white hover:bg-blue-50 font-sans font-[500] text-[18px] leading-6 ${router.pathname === '' ? 'text-[#5C6AC4]' : 'text-slate-600'} hover:text-[#5C6AC4] rounded-[6px] transition duration-[250ms]`}>
                                <span className="flex items-center w-fit h-fit"><IoSettingsOutline className="inline mr-3 w-[20px] h-[20px]" />Settings</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-fit px-3 py-3">
                        <button className="font-sans font-[600] text-[15px] leading-6 text-slate-500 hover:text-slate-700 border-2 border-slate-500 hover:border-slate-700 px-2 py-1 rounded-[6px] transition duration-200">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavPane;
