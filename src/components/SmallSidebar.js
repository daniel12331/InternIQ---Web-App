import Wrapper from "../assets/wrapper/SmallSidebar";
import {FaTimes} from 'react-icons/fa';
import Logo from './logo';
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from './NavLinks'

const SmallSideBar = () => {
    //const {isSidebarOpen} = useSelector((store) => store.user)
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    };

    return (
    <Wrapper>
        <div className='sidebar-container show-sidebar'>
            <div className="content">
                <button type="button" className="close-btn" onClick={toggle}>
                    <FaTimes/>
                    </button>
                    <header>
                        <Logo/>
                    </header>
                <NavLinks toggleSidebar={toggle}/>
                </div>
            </div>
    </Wrapper>
    )};
export default SmallSideBar