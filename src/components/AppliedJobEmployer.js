import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaBuilding   } from 'react-icons/fa';
import Wrapper from '../assets/wrapper/Job';
import JobInfo from './JobInfo';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { deleteApplication, downloadFile } from '../features/applications/allApplictionSlice';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import { setApplicantRequest } from '../features/applications/allApplictionSlice';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const AppliedJobEmployer = ({
  _id,
  jobID,
  JobTitle,
  createdAt,
  name,
  email,
  status,
  feedback
  

}) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [blobData, setBlobData] = useState(null);

  const date = moment(createdAt).format('MMM Do, YYYY');

  const dispatch = useDispatch()
  const [sendFeedback, setSendFeedback] = useState(`Dear ${name},` + "\n" )


  const handleJobInput = (e) => {
    setSendFeedback(e.target.value);
  };
  
  const handleInterview = (e) =>{
    e.preventDefault();

    const status = 'interview'

    dispatch(setApplicantRequest({ _id: _id,application: {status, feedback: sendFeedback}}));
    
    //navigate('/appliedjobs')
    window.location.reload(false);
    return;
}

const handleDeclined = (e) =>{
  e.preventDefault();
    const status = 'declined'

  dispatch(setApplicantRequest({ _id: _id, application: {status, feedback : sendFeedback} }));

  window.location.reload(false);

  //navigate('/appliedjobs')
  return;
}

const [open, setOpen] = useState(false)

const showDetailsPopUp = () => {
setOpen(true);

};

const hideDetailsPopUp = () => {
  setOpen(false);
 
  };

  const downloadCV = (e) => {
    e.preventDefault();

  
    console.log(_id)
  const id1 = '640b470f51472891305cd00d'
    dispatch(downloadFile(_id)).then(async (response) => {
      console.log(response)
      const pdfBlob = new Blob([response.payload], { type: 'application/pdf' })
     
      const url = URL.createObjectURL(pdfBlob);
      //console.log(pdfBlob)
      setBlobData(url);
    });
  };


  

  return (
    <Wrapper>
    <header>
      <div className='main-icon'>{JobTitle?.charAt(0)}</div>
      <div className='info'>
        <h5>Application from {name} - {email}</h5>
        <JobInfo icon={<FaCalendarAlt />} text={'Application created on ' + date} />
        </div>
    </header>
    <div className='content'>
    
      <footer>
      <Popup
            trigger={<button className="btn submit-btn"> View CV </button>}
            modal
            nested
            onOpen={downloadCV}
            >

                { close => (
      <div className="formemployercv">
        <button className="btn submit-btn" onClick={close}>
          &times;
        </button>
        <div className="">Application Name - {name}</div>
        <div className="">Application Email - {email}</div>

              {blobData ? (
   <iframe title="PDF Viewer" src={blobData} width="100%" height="600px"></iframe>
      ) : (
        <div>Invalid file</div>
      )}

      </div>
    )}
            </Popup>




            <p></p>



            {status === 'pending'?<Popup
            trigger={<button className="btn submit-btn"> Respond </button>}
            modal
            nested>

                {close => (
      <div className="formemployer">
        <button className="btn submit-btn" onClick={close}>
          &times;
        </button>
        <div className="header">Application Name - {name}</div>
        <div className="header">Application Email - {email}</div>

        <textarea 
            type='text'
            name='feedback'
            value={sendFeedback} 
            onChange={handleJobInput}
            className="form-input-feedback" 
            />

        <button type='button'className={`btn`} onClick={handleInterview}>Set an Interview</button>
            {' '}
        <button type='button'className={`btn`} onClick={handleDeclined}>Reject Applicant</button>
            {' '}

      </div>
    )}
            </Popup>: <button type='button' className={`btn ${status}`} onClick={showDetailsPopUp}>{status}</button>}
            

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
        <div className="header">Application Name - {name}</div>
        <div className="header">Application Email - {email}</div>

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

export default AppliedJobEmployer;