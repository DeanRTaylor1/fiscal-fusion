import { Fragment, useContext } from "react";
import navItems from "./NavItems";
import { FaBars, FaCross } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { MobileNavContext } from "../layouts/MainLayout";

const Mobilenav: React.FC = ({

}) => {

    const mobileNavContext = useContext(MobileNavContext)
    return (
        <Fragment>
            <div className="md:hidden h-[3rem] flex justify-between w-full items-center "><div className="md:hidden w-full h-[3rem] flex items-center text-3xl">fiscal fusion</div>
                <div onClick={(e) => mobileNavContext?.setMobileNavActive(mobileNavContext.mobileNavActive === 'scale-100 opacity-100' ? 'scale-0 opacity-0' : 'scale-100 opacity-100')} className=" right-6 rounded-lg bg-white w-fit top-6 py-2 px-3 h-fit bg-opacity-20 hover:bg-opacity-50 hover:cursor-pointer ease-in-out transition-all duration-300 z-50 md:hidden">
                    <FaBars size={20} color="white" className='md:hidden opac text-white hover:cursor-pointer' />
                </div>
            </div>
            <div className={`md:hidden rounded-md shadow-sm border-gray-50 border border-dashed absolute top-0 z-50 bg-white h-[90vh] text-black min-w-[92vw]  p-4 flex flex-col ease-in-out duration-500 transition-opacity origin-top ${mobileNavContext?.mobileNavActive}`}>
                <div className=' flex justify-between items-center h-18 z-50 top-4 '>
                    <h2 className="text-2xl w-full pl-1">fiscal fusion</h2>
                    <div>
                        <GrFormClose
                            onClick={(e) => mobileNavContext?.setMobileNavActive(mobileNavContext.mobileNavActive === 'scale-100 opacity-100' ? 'scale-0 opacity-0' : 'scale-100 opacity-100')} className="hover:cursor-pointer hover:opacity-70" size={20} />
                    </div>
                </div>
                <div className='flex flex-col h-h90 justify-between'>
                    <div>
                        <ul className='md:hidden flex flex-col gap-2 py-4'>{navItems}</ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Mobilenav;
