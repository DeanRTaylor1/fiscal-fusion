import { Fragment } from 'react';
import styles from './NavBar.module.css';
import Mobilenav from './MobileNavigation';
const NavBar: React.FC = () => {
    return (

        <Fragment>
            <div className={styles.navbar}>
                <Mobilenav />
            </div>
        </Fragment>

    )
}

export default NavBar