import { Fragment } from 'react';
import styles from './NavBar.module.css';
import Mobilenav from './MobileNavigation';
import DesktopNav from './MainNavigation';
const NavBar: React.FC = () => {
    return (

        <Fragment>
            <div className={styles.navbar}>
                <DesktopNav />
                <Mobilenav />
            </div>
        </Fragment>

    )
}

export default NavBar