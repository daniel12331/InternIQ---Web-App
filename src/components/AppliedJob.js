import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaBuilding   } from 'react-icons/fa';
import Wrapper from '../assets/wrapper/Job';
import JobInfo from './JobInfo';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { deleteApplication } from '../features/applications/allApplictionSlice';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import { Document } from 'react-pdf'

const AppliedJob = ({
  _id,
  jobID,
  JobTitle,
  createdAt,
  status,
  feedback

}) => {
  const date = moment(createdAt).format('MMM Do, YYYY');

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const showDetailsPopUp = () => {
  setOpen(true);
  
  };
  
  const hideDetailsPopUp = () => {
    setOpen(false);
   
    };
    const handleJobInput = (e) => {
    };
  return (
    <Wrapper>
    <header>
      <div className='main-icon'>{JobTitle?.charAt(0)}</div>
      <div className='info'>
        <h5>Application at {JobTitle}</h5>
      </div>
    </header>
    <div className='content'>
      <div className='content-center'>
        <JobInfo icon={<FaCalendarAlt />} text={date} />
      </div>
      <footer>
      <Link
              to={`/jobs/${jobID}`}
              type='submit'
              className='btn btn-block submit-btn'
          
            >
              More details
            </Link>
            <p></p>
            <Link
              to='/employer/addjobs'
              className='btn edit-btn'
           
            >
              Edit Application
            </Link>
   
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => dispatch(deleteApplication(_id))}
            >
              delete application
            </button>
            <p></p>{status ==='interview' || status === 'declined'? 
            <button type='button' className={`btn ${status}`} onClick={showDetailsPopUp}>{status}</button>
            :<button type='button' className={`btn ${status}`}>{status}</button> } 
            <Popup
            open={open}
            modal
            nested
            onClose={hideDetailsPopUp}>

                {close => ( 
                
      <div className="formemployer">
        <button className="btn submit-btn" onClick={close}>
          &times;
        </button>
        <h5>Application at {JobTitle}</h5>
        <textarea 
            type='text'
            name='feedback'
            value={feedback} 
            onChange={handleJobInput}
            className="form-input-feedback" 
            />
      </div>
    ) }
            </Popup>
      </footer>
    </div>
  </Wrapper>
  );
};

export default AppliedJob;