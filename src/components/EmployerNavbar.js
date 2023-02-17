import Wrapper from '../assets/wrapper/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, clearStore } from '../features/employer/employerSlice';
import Logored from './logo-red';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { employer } = useSelector((store) => store.employer);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btnemployer' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logored />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btnemployer'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {employer?.organisationname}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdownemployer show-dropdown' : 'dropdownemployer'}>
            <button
              type='button'
              className='dropdown-btnemployer'
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