import StatItemEmployer from './StatItemEmployer';
import { FaArchive } from 'react-icons/fa';
import Wrapper from '../assets/wrapper/StatsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllJobs } from '../features/allJobs/allJobSlice';

const StatsContainerEmployer = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const { jobs } = useSelector((store) => store.allJobs);  

  return (
    <Wrapper>
    
      {jobs.map((item, index) => {
        return <StatItemEmployer key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainerEmployer;