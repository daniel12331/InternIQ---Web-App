import Wrapper from "../assets/wrapper/BigSidebar"
import NavLinks from "./NavLinks";
import Logo from "../assets/images/IntenIQ-Logo.png";
import { useSelector } from "react-redux";


const BigSidebar = () => {
    const {isSidebarOpen} = useSelector((store) => store.user);
    return (
    <Wrapper>
        <div className={isSidebarOpen?'sidebar-container' : 'sidebar-container show-sidebar'}>
            <div className="content">
                <header>
                   <img src={Logo} alt='Logo' style={{height:120, width:140}}/>
                </header>
                <NavLinks/>

            </div>
        </div>
    </Wrapper>
    )};
export default BigSidebar