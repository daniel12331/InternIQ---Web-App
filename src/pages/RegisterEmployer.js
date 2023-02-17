import { useState, useEffect } from "react";
import {Logored, FormRow} from '../components'
import Wrapper from "../assets/wrapper/RegisterPage";
import {toast} from 'react-toastify';
//https://www.npmjs.com/package/react-toastify Toastify link/tutorial....
import { useDispatch, useSelector } from "react-redux";
import { loginEmployer, registerEmployer } from "../features/employer/employerSlice";
import { useNavigate } from "react-router";


const intialState = {
    organisationname:'',
    organisationemail:'',
    password:'',
    isMember: true,
}

function RegisterEmployer(){ 
const [values, setValues] = useState(intialState)
const {employer, isLoading} = useSelector(store => store.employer)
const dispatch = useDispatch();
const navigate = useNavigate();
const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`)
    setValues({...values,[name]: value})
}
const onSubmit = (e) =>{
    e.preventDefault();
    const{organisationname,organisationemail,password,isMember} = values
    if(!organisationemail || !password || (!isMember && !organisationname)){
        toast.error("Please fll out all fields");
        return;
    }

    if(isMember){
        dispatch(loginEmployer({organisationemail:organisationemail, password: password}));
        return;
    }
    dispatch(registerEmployer({organisationname,organisationemail,password}))
}

const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
}
useEffect(()=>{
    if(employer){
        setTimeout(()=>{
            navigate('/employer');
        }, 2000);
    }
    },[employer])
    return (
    <Wrapper className='full-page'> 
        <form className="formemployer" onSubmit={onSubmit}>
        <Logored/>
        <h3>{values.isMember?'Login': 'Register'}</h3>
        {!values.isMember &&(
            <FormRow 
                type='text' 
                name='organisationname' 
                value={values.organisationname}
                handleChange={handleChange} />
                )}
            <FormRow 
                type='email' 
                name='organisationemail' 
                value={values.organisationemail}
                handleChange={handleChange} />
            <FormRow 
                type='password' 
                name='password' 
                value={values.password}
                handleChange={handleChange} />

            <button type="submit" className="btnr btn-block" disabled={isLoading}>
                {isLoading?"loading..." : 'submit'}
            </button>
            <p>
            {values.isMember?'Not a member yet?':'Already a member?'}
                
                <button type='button' className='member-btn' onClick={toggleMember}>
                    {values.isMember?'Register':'Login'}
                </button>
            </p>
        </form>
    </Wrapper>
    );
    };
    export default RegisterEmployer