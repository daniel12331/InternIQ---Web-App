import { useState, useEffect } from "react";
import {Logo, FormRow} from '../components'
import Wrapper from "../assets/wrapper/RegisterPage";
import {toast} from 'react-toastify';
//https://www.npmjs.com/package/react-toastify Toastify link/tutorial....
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const intialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}

function Register(){ 
const [values, setValues] = useState(intialState)
const {user, isLoading} = useSelector(store => store.user)
const dispatch = useDispatch();
const navigate = useNavigate();
const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values,[name]: value})
}
const onSubmit = (e) =>{
    e.preventDefault();
    const{name,email,password,isMember} = values
    if(!email || !password || (!isMember && !name)){
        toast.error("Please fll out all fields");
        return;
    }

    if(isMember){
        dispatch(loginUser({email:email, password: password}));
        return;
    }
    dispatch(registerUser({name,email,password}))
}

const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
}
useEffect(()=>{
if(user){
    setTimeout(()=>{
        navigate('/');
    }, 2000);
}
},[user])
    return (
    <Wrapper className='full-page'> 
        <form className="form" onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember?'Login': 'Register'}</h3>
        {!values.isMember &&(
            <FormRow 
                type='text' 
                name='name' 
                value={values.name}
                handleChange={handleChange} />
                )}
            <FormRow 
                type='email' 
                name='email' 
                value={values.email}
                handleChange={handleChange} />
            <FormRow 
                type='password' 
                name='password' 
                value={values.password}
                handleChange={handleChange} />

            <button type="submit" className="btn btn-block" disabled={isLoading}>
                {isLoading?"loading..." : 'submit'}
            </button>
            <p>
            {values.isMember?'Not a member yet?':'Already a member?'}
                
                <button type='button' className='member-btn' onClick={toggleMember}>
                    {values.isMember?'Register':'Login'}
                </button>
            </p>
            <p> 
                <Link to='/registerEmployer' className='member-btn'>Employer?</Link>
                </p>
        </form>
    </Wrapper>
    );
    };
    export default Register