import Wrapper from '../../assets/wrapper/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import JobInfo from '../../components/JobInfo';
import { FaLocationArrow, FaBriefcase, FaBuilding, FaArrowLeft  } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { FileUploader } from "react-drag-drop-files";
import { useState } from 'react';
import { getUserFromLocalStorage, } from '../../utils/localStorage';
import {toast} from 'react-toastify';
import { registerApplication } from "../../features/user/userSlice";


const JobPage = () => {
  const {
    _id,
    position,
    company,
    jobLocation,
    jobType,
    totalApplicants,
    description,
    
  
  } = useSelector((store) => store.job);
  const { isLoading} = useSelector(store => store.user)

  const initialUser = {
    user: getUserFromLocalStorage()
  }

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
    }
    const fileTypes = ["DOC", "DOCX", "PDF"];

   
        const [file, setFile] = useState(null);

        const handleChange = (file) => {
          setFile(file);
        };
      
    const name = initialUser.user.name
    const email = initialUser.user.email
    const jobID = _id;

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        
        if(!email || !name){
            toast.error("Please fll out all fields");
            return;
        }
        dispatch(registerApplication({jobID,name,email}))
    }
  return (
      <Wrapper>
    <header>
      <FaArrowLeft onClick={goBack} className="btn-block submit-btn btn-container colour"></FaArrowLeft>
      <div className='info'>

        <h5>{company} - {position}</h5>

      </div>
    </header>
    <div className='content'>
      <div className='content-center'>
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaBriefcase />} text={"Applicants: " + totalApplicants} />
        <JobInfo icon={<FaBuilding />} text={jobType} />
        <p>{description}</p>
      </div>
      <footer>
            <div style={{ textAlign: "center" }}>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
                <p></p>
                <button className='btn btn-block submit-btn' onClick={onSubmit}> {isLoading?"loading..." : 'submit'} </button>
        </div>   
      </footer>
    </div>
    </Wrapper>
  );
};
export default JobPage;