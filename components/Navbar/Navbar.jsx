import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/messages'>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings'>Settings</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;