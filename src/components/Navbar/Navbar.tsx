import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {

    return <nav className={s.nav}>
        <div >
            <NavLink to='/profile/' className={s.item} activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs/' className={s.item} activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users/' className={s.item} activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav >
}

