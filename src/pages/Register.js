import { useState, useEffect } from "react";
import {Logo} from '../components'
import Wrapper from "../assets/wrapper/RegisterPage";

const intialState = {
    name:'',
    email:'',
    password:''
}

const Register=()=>{
    const [values, setValues] = useState(intialState)

const handleChange = (e) =>{
    console.log(e.target);
}
const onSubmit = (e) =>{
    console.log(e.target);
}

    return <div>Register</div>
    };
    export default Register