import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import styles from "./MainLayout.module.css";
import HomeDivider from "../design/dividers/HomeDivider";
import NavBar from "../Header/NavBar";

interface MobileNavContextProps {
    mobileNavActive: string;
    setMobileNavActive: Dispatch<SetStateAction<string>>
}

export const MobileNavContext = createContext<MobileNavContextProps | null>(null);

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const [mobileNavActive, setMobileNavActive] = useState('scale-0 opacity-0');
    return (
        <MobileNavContext.Provider value={{ mobileNavActive, setMobileNavActive }}>
            <div className={styles.mainLayout}>
                <NavBar />
                {/* <Navbar /> */}
                <main className={styles.mainContent}>
                    <div className={styles.container}>{children}</div>
                </main>
                <div className={styles.footer}>Footer</div>
                {/* <Footer /> */}
            </div>
        </MobileNavContext.Provider>
    );
};

export default MainLayout;
