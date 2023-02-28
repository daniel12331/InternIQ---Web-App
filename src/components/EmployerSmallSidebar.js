import Wrapper from "../assets/wrapper/SmallSidebar";
import {FaTimes} from 'react-icons/fa';
import Logo from './logo-red';
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/employer/employerSlice";
import NavLinks from './EmployerNavLinks'

const EmployerSmallSidebar = () => {
    const {isSidebarOpen} = useSelector((store) => store.employer)
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    };

    return (
    <Wrapper>
        <div className={isSidebarOpen?'sidebar-container show-sidebar':'sidebar-container '}>
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
export default EmployerSmallSidebar