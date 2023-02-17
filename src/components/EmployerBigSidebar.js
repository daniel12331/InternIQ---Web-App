import Wrapper from "../assets/wrapper/BigSidebar"
import NavLinks from "./EmployerNavLinks";
import Logored from "./logo-red";
import { useSelector } from "react-redux";


const EmployerBigSidebar = () => {
    const {isSidebarOpen} = useSelector((store) => store.employer);
    return (
    <Wrapper>
        <div className={isSidebarOpen?'sidebar-container show-sidebar': 'sidebar-container '}>
            <div className="content">
                <header>
                <Logored />

                </header>
                <NavLinks/>

            </div>
        </div>
    </Wrapper>
    )};
export default EmployerBigSidebar