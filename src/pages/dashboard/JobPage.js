import Wrapper from '../../assets/wrapper/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import JobInfo from '../../components/JobInfo';
import { FaLocationArrow, FaBriefcase, FaBuilding, FaArrowLeft  } from 'react-icons/fa';
import {useNavigate, useParams} from 'react-router-dom';
import { FileUploader } from "react-drag-drop-files";
import { useState } from 'react';
import { getUserFromLocalStorage, } from '../../utils/localStorage';
import {toast} from 'react-toastify';
import { createApplication, uploadFile } from '../../features/applications/allApplictionSlice';
import { useEffect } from 'react';
import { getJob } from '../../features/allJobs/allJobSlice';
import { addTotalApplicants } from '../../features/jobs/jobSlice';
import { Document, Page, pdfjs } from "react-pdf";

const JobPage = () => {
  const {
    job
  } = useSelector((store) => store.allJobs);
  const { isLoading} = useSelector(store => store.allJobs)

  const initialUser = {
    user: getUserFromLocalStorage()
  }
  const params = useParams();
  const _id = params.id





  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
    }
    const fileTypes = ["DOC", "DOCX", "PDF"];

      
    const name = initialUser.user.name
    const email = initialUser.user.email
    const jobID = _id;
    const JobTitle = job.company + ' - ' + job.position;
    const currentApplicants = job.totalApplicants + 1;

    const [totalApplicants, setTotalApplicants] = useState(currentApplicants);
  

    const [selectedFile, setSelectedFile] = useState(null);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    useEffect(() => {
      dispatch(getJob(_id));

      setTotalApplicants(currentApplicants);
    },[_id, currentApplicants]);
    
    const onSubmit = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile);
        if(!email || !name){
            toast.error("Please fll out all fields");
            return;
            
        }
        dispatch(createApplication({jobID,JobTitle,name,email}))
        .then(async (response) => {
          const appID = response.payload.application.appID;

          await dispatch(uploadFile({formData, appID}));
        });
        



        const position = job.position;
        const company = job.company;
        const jobLocation = job.jobLocation;
        const jobType = job.jobType;
        const description = job.description;

        setTotalApplicants(currentApplicants + 1);

        dispatch(addTotalApplicants({ 
         jobId: _id,
          job: {company, position, jobLocation, totalApplicants, description, jobType}
        }));
        navigate('/appliedjobs')
        return;

    }
  return (
      <Wrapper>
    <header>
      <FaArrowLeft onClick={goBack} className="btn-block submit-btn btn-container colour"></FaArrowLeft>
      <div className='info'>

        <h5>{job.company} - {job.position}</h5>
      </div>
    </header>
    <div className='content'>
      <div className='content-center'>
        <JobInfo icon={<FaLocationArrow />} text={job.jobLocation} />
        <JobInfo icon={<FaBriefcase />} text={"Applicants: " + job.totalApplicants} />
        <JobInfo icon={<FaBuilding />} text={job.jobType} />
        <p>{job.description}</p>
      </div>
      <footer>
            <div style={{ textAlign: "center" }}>
                <p></p>
      <div className="document-input">
       <input type="file" onChange={(event) => setSelectedFile(event.target.files[0])} />
    </div>
    <button className='btn btn-block submit-btn' onClick={onSubmit} disabled={(!selectedFile? true: false)}> {!selectedFile?"Upload a CV" : 'Submit CV'} </button>
        </div>   
      </footer>
    </div>
    </Wrapper>
  );
};
export default JobPage;