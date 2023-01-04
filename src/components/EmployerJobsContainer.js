import { useEffect } from 'react';
import EmployerJob from './EmployerJob';
import Wrapper from '../assets/wrapper/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../features/allJobs/allJobSlice';

const EmployerJobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <h2>Jobs are loading</h2>;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <EmployerJob key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default EmployerJobsContainer;