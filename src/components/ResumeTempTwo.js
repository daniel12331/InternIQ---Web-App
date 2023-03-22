import Wrapper from '../assets/wrapper/TempTwo';
import { useSelector } from 'react-redux';

const ResumeTempTwo = ({result, image, color}) => {
    const {
        gptData
      } = useSelector((store) => store.resume);

      const replaceWithBr = (string) => {
		return string.replace(/\n{2}/, '');
	};
  return (
    <Wrapper>
     
     <header className='header'  style={{background: color}}>
    <div className='header-content'>
      <div className='header-left'>
        <h1>{result.fullName}</h1>
        <p className='resumeTitle'>{result.currentCourse}</p>
        <p className='resumeTitle'>{result.currentInstitute}</p>
      </div>
      <div className='header-right'>
        <img
          src={image}
          alt={result.fullName}
          className='resumeImage'
        />
        <p className='resumeTitle'>{result.email}</p>
        <p className='resumeTitle'>{result.mobile}</p>
      </div>
    </div>
  </header>
  <div className='resumeBody'>
    <div className='resumeBodySection'>
      <h2 className='resumeBodyTitle'>Profile Summary</h2>
      <p className='resumeBodyContent' dangerouslySetInnerHTML={{ __html: replaceWithBr(gptData.chatgptData.summary) }} />
    </div>
    <div className='resumeBodySection'>
      <h2 className='resumeBodyTitle'>Project History</h2>
      <p className='resumeBodyContent' dangerouslySetInnerHTML={{ __html: replaceWithBr(gptData.chatgptData.projectdescription) }} />
    </div>
    <div className='resumeBodySection'>
      <h2 className='resumeBodyTitle'>Interests</h2>
      <div className='interests'>
        {result.interestInfo?.map((interest) => (
          <span key={interest} className='interest'>{interest}</span>
        ))}
      </div>
    </div>
  </div>
    </Wrapper>
  );
};
export default ResumeTempTwo;