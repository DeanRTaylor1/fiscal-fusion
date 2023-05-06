import { Fragment, useContext } from "react";
import navItems from "./NavItems";
import { FaBars, FaCross } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { MobileNavContext } from "../layouts/MainLayout";

const DesktopNav: React.FC = ({

}) => {

    return (
        <Fragment>
            <div className="hidden font-extrabold text-3xl text-white z-50 w-full h-[3rem] md:flex justify-start gap-16 items-center pr-4 max-w-[1500px]">
                <div>fiscal fusion</div>
                <div className="flex gap-16 list-none text-2xl " >{navItems}</div>
            </div>
        </Fragment>
    );
};

export default DesktopNav;
