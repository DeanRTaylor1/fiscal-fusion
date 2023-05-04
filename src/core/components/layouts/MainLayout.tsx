import { PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";
import HomeDivider from "../design/dividers/HomeDivider";
import NavBar from "./NavBar";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.mainLayout}>
            <NavBar />
            {/* <Navbar /> */}
            <main className={styles.mainContent}>
                <div className={styles.container}>{children}</div>
            </main>
            <div className={styles.footer}>Footer</div>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
