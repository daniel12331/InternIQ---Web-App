import Wrapper from "../assets/wrapper/Navbar";
import {FaAlignLeft,FaCaretDown,FaUserCircle} from 'react-icons/fa';
import Logo from "./logo";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleSidebar } from "../features/user/userSlice";

const EmployerNavbar = () => {
    const dispatch = useDispatch();
    const[showLogout, setShowLogout] = useState(false)

    const toggle = () =>{
        dispatch(toggleSidebar());
    };
    return (
    <Wrapper>
        <div className="nav-center">
            <button type='buton' className="toggle-btn" onClick={toggle}>
                <FaAlignLeft/>
            </button>
            <div>
                <Logo/>
                <h3 className="logo-text">dashboard</h3>
            </div>
            <div className="btn-container">
                <button
                    type="button"
                    className="btn"
                    onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle/>
                        <p>user</p>
                        <FaCaretDown/>
                    </button>
                    <div className={showLogout?'dropdown show-dropdown':'dropdown'}>
                        <button 
                        type="button"
                        className="dropdown-btn"
                        onClick={()=> {
                            console.log('logout user')}}>
                                logout
                            </button>

                    </div>
            </div>

        </div>    
    </Wrapper>
    )};
export default EmployerNavbar