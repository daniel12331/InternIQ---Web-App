import Wrapper from '../assets/wrapper/LandingPage';
import Lpage1 from '../assets/images/Lpage1-removebg-preview.png'
import {Logo} from '../components';
import {Link} from 'react-router-dom';

const Landing = () => {
    return <Wrapper>
        <nav>
        <Logo/>
        </nav>

        <div className='container page'>
            <div className='info'>
                 <h1>Job <span>Intern</span> App</h1>
            <p>
            Register or login to get a insight on different jobs specifications and other details,
            learn what type of experience are needed in specific areas and improve your portfolio by using our resume builder to
            help you perfect your interest in employers.
            </p>

            <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={Lpage1} alt='logo' className='img main-img'/>
        </div>
    </Wrapper>;

};


export default Landing;