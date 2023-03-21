import { useEffect } from 'react';
import AppliedJob from './AppliedJob';
import Wrapper from '../assets/wrapper/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAppliedJobs } from '../features/applications/allApplictionSlice';

const AppliedJobsContainer = () => {
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

  useEffect(() => {
    
  dispatch(getAllAppliedJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <h2>Loading Applied Jobs</h2>;
  }

  if (appliedjobs.length === 0) {
    return (
      <Wrapper>
        <h2>No applied jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{appliedjobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {appliedjobs.map((appliedjob) => {
          return <AppliedJob key={appliedjob._id} {...appliedjob} />;
        })}
      </div>
    </Wrapper>
  );
};
export default AppliedJobsContainer;