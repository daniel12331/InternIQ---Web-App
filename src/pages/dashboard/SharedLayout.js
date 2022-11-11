import { Outlet } from "react-router-dom";
import { SmallSideBar,BigSidebar,Navbar } from "../../components";
import Wrapper from "../../assets/wrapper/SharedLayout";

const SharedLayout = () => {
    return <Wrapper>
        <main className="dashboard">
            <SmallSideBar/>
            <BigSidebar/>
        <div>
            <Navbar/>
            <div className="dashboard-page">
                <Outlet/>
            </div>
        </div>
        </main>
    </Wrapper>;
};
export default SharedLayout