import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/ErrorPage";
import errorimg from '../assets/images/error.jpg'

const Error=()=>{
return (
<Wrapper className="full-page">
<div>
<img src={errorimg} alt="errorimage"/>
<h3>Page not found!</h3>
<p>We cant find the page your looking for</p>
<Link to='/'>back home</Link>
</div>
</Wrapper>
)
};
export default Error