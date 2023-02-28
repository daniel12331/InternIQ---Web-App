import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaBuilding   } from 'react-icons/fa';
import Wrapper from '../assets/wrapper/Job';
import JobInfo from './JobInfo';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { setApplication } from '../features/jobs/jobSlice';
import { useDispatch } from 'react-redux';


const Job = ({
  _id,
  position,
  company,
  jobLocation,
  totalApplicants,
  createdAt,
  description,
  jobType
}) => {
  const date = moment(createdAt).format('MMM Do, YYYY');
  const dispatch = useDispatch();

  return (
    <Wrapper>
    <header>
      <div className='main-icon'>{company?.charAt(0)}</div>
      <div className='info'>
        <h5>{position}</h5>
        <p>{company}</p>
      </div>
    </header>
    <div className='content'>
      <div className='content-center'>
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />
        <JobInfo icon={<FaBriefcase />} text={"Applicants: " + totalApplicants} />
        <JobInfo icon={<FaBuilding />} text={jobType} />
      </div>
      <footer>
            <Link
              to={`/jobs/${_id}`}
              type='submit'
              className='btn btn-block submit-btn'
              onClick={() =>
                dispatch(
                  setApplication({
                     _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    description,
                    totalApplicants
                  })
                )
              }
            >
              Apply
            </Link>
      </footer>
    </div>
  </Wrapper>
  );
};

export default Job;