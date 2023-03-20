import { useEffect } from 'react';
import Wrapper from '../assets/wrapper/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicantsByJobID } from '../features/applications/allApplictionSlice';
import { useParams, useNavigate } from 'react-router';
import AppliedJobEmployer from './AppliedJobEmployer';
import { FaArrowLeft  } from 'react-icons/fa';


const AppliedJobsContainerEmployer = () => {
  const {
    appliedjobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.applications);
  const dispatch = useDispatch();
  const params = useParams();
  const jobID = params.id; 

  useEffect(() => {
    dispatch(getApplicantsByJobID(jobID));
  },[jobID]);

  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
    }

  if (isLoading) {
    return <h2>Loading Applicants</h2>;
  }

  if (appliedjobs.length === 0) {
    return (
      <Wrapper>
        <h2>No applicants yet.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <header>
    <FaArrowLeft onClick={goBack} className="btn-block submit-btn btn-container colour"></FaArrowLeft>
    </header>
      <h5>
        {appliedjobs.length} Applicantion{appliedjobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {appliedjobs.map((appliedjob) => {
          return <AppliedJobEmployer key={appliedjob._id} {...appliedjob} />;
        })}
      </div>
    </Wrapper>
  );
};
export default AppliedJobsContainerEmployer;