import { Outlet } from "react-router-dom";
import { EmployerSmallSidebar,EmployerBigSidebar,EmployerNavbar } from "../../components";
import Wrapper from "../../assets/wrapper/SharedLayout";

const EmployerSharedLayout = () => {
    return <Wrapper>
        <main className="dashboard">
            <EmployerSmallSidebar/>
            <EmployerBigSidebar/>
        <div>
            <EmployerNavbar/>
            <div className="dashboard-page">
                <Outlet/>
            </div>
        </div>
        </main>
    </Wrapper>;
};
export default EmployerSharedLayout