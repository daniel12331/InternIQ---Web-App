import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrapper/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';

const state = 'pending'
//declined
//pending
const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>A</div>
        <div className='info'>
          <h5>Software Developer</h5>
          <p>Apple</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
        <div className='content-center'>
            <JobInfo icon={<FaLocationArrow />} text='Dublin' />
            <JobInfo icon={<FaCalendarAlt />} text='11/11/2022' />
            <JobInfo icon={<FaBriefcase />} text='Full Time' />
            <div className={`status ${status}`}>{status}</div>
            </div>
          <h4>more content</h4>
          <div className={`status ${state}`}>{state}</div>
        </div>
        <footer>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;