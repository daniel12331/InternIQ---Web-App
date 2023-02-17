import { NavLink } from "react-router-dom";
import links from "../utils/Employerlinks";

const NavLinks =(toggleSidebar) => {
    return(
        <div className="nav-links">
        {links.map((link)=>{
            const{text,path,id,icon} = link
            return( <NavLink to={path} className={({isActive})=>{
                return isActive?'nav-linkemployer activeemployer':'nav-linkemployer'
            }}
            key={id}
            onClick={toggleSidebar}
            >
            <span className="icon">{icon}</span>
            {text}
            </NavLink>

            );

        })}
    </div>
    )
}
export default NavLinks