import Wrapper from '../assets/wrapper/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import LogoIQ from './logoIQ';
import Logo from '../assets/images/IntenIQ.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, clearStore } from '../features/user/userSlice';
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
 const ss = useParams() 
 
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div> 
          <img src={Logo} alt='Logo' style={{height:100, width:120}}/>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => dispatch(clearStore('Logging out...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;