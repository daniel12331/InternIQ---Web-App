import Wrapper from '../assets/wrapper/DashboardFormPage';
import ImgTips from '../assets/images/tips.jpg'
import res from '../assets/images/research.png'
import Qs from '../assets/images/Questions.png'
import Dress from '../assets/images/dress.jpg'
import Time from '../assets/images/time.png'
import CV from '../assets/images/cv.png'
import Enth from '../assets/images/enth.jpg'
import Ask from '../assets/images/Ask.png'
import Send from '../assets/images/send.jpg'
const InterviewTips = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1>Interview Tips</h1> <img src={ImgTips} style={{height:'10%',width:'10%', marginTop:'-40px'}}/>
      </div>

      <br></br>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Research the company </h2>
      <img src={res} style={{height:'5%',width:'5%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Before the interview, 
        make sure you research the company you are interviewing with. 
        Look at their website, social media accounts, 
        and news articles to get an idea of their culture,
         values, and products/services.
          
        </h5>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Practice Interview Questions</h2>
      <img src={Qs} style={{height:'10%',width:'10%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Prepare answers to common interview questions, 
        such as "tell me about yourself" and "why do you want to 
        work for this company?" Practice your answers in front of a mirror
         or with a friend.  
        </h5>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Dress Appropiately</h2>
      <img src={Dress} style={{height:'10%',width:'10%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Dress professionally for the interview.
         Make sure your clothing is clean, ironed, and fits well.
          
        </h5>

        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Be on time</h2>
      <img src={Time} style={{height:'5%',width:'5%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Arrive on time or a few minutes early for the interview.
         Plan your route and give yourself extra time in case of traffic or other unexpected delays.
        </h5>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Bring copies of your resume</h2>
      <img src={CV} style={{height:'10%',width:'5%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Bring several copies of your resume to the interview,
        in case the interviewer asks for one or you need to reference it.
          
        </h5>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Show Enthusiasm</h2>
      <img src={Enth} style={{height:'10%',width:'10%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Show enthusiasm for the job and the company during the interview.
         Smile, make eye contact, and use positive body language.
          
        </h5>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Ask Questions</h2>
      <img src={Ask} style={{height:'10%',width:'10%', marginTop:'-40px'}}/>
      </div>
        <h5>
        Prepare some questions to ask the interviewer about the company and the job.
         This shows that you're interested and engaged.
          
        </h5>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Follow Up</h2>
      <img src={Send} style={{height:'10%',width:'7%', marginTop:'-40px'}}/>
      </div>
        <h5>
        After the interview, send a thank-you email or note to the interviewer.
         This shows that you appreciate their time and are still 
         interested in the job.
          
        </h5>

    </Wrapper>
  );
};
export default InterviewTips;