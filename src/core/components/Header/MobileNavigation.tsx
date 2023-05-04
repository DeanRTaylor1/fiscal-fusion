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
            <div onClick={(e) => mobileNavContext?.setMobileNavActive(mobileNavContext.mobileNavActive === 'scale-100 opacity-100' ? 'scale-0 opacity-0' : 'scale-100 opacity-100')} className="fixed right-4 rounded-lg bg-white w-fit py-2 px-3 bg-opacity-20 hover:bg-opacity-50 hover:cursor-pointer ease-in-out transition-all duration-300">
                <FaBars size={20} color="white" className='md:hidden opac text-white hover:cursor-pointer' />
            </div>
            <div className={`md:hidden rounded-md sticky z-50 bg-white h-[90vh] text-black p-4 flex flex-col ease-in-out duration-500 transition-opacity origin-top ${mobileNavContext?.mobileNavActive}`}>
                <div className='flex justify-between items-center h-18 z-50 '>
                    <h2>Fiscal Finance</h2>
                    <div><GrFormClose onClick={(e) => mobileNavContext?.setMobileNavActive(mobileNavContext.mobileNavActive === 'scale-100 opacity-100' ? 'scale-0 opacity-0' : 'scale-100 opacity-100')} className="hover:cursor-pointer hover:opacity-70" size={20} /></div>
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
