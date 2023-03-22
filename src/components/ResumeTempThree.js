import Wrapper from '../assets/wrapper/TempThree';
import { useSelector } from 'react-redux';

const ResumeTempThree = ({result, image, color}) => {
    const {
        gptData
      } = useSelector((store) => store.resume);

      const replaceWithBr = (string) => {
		return string.replace(/\n{2}/, '');
	};
  return (
    <Wrapper>
        <header className='header'  style={{background: color}}>
					<div>
						<h1>{result.fullName}</h1>
						<p className='resumeTitle headerTitle'>
							{result.currentCourse} - {result.currentInstitute}
						</p>
						<p className='resumeTitle headerTitle'>
							{result.email} - {result.mobile}
						</p>
						
					</div>
					<div>
                        <img
                            src={image}
                            alt={result.fullName}
                            className='resumeImage'
                        />
                    </div>
				</header>
				<div className='resumeBody'>
					<div>
						<h2 className='resumeBodyTitle'>Profile Summary</h2>
						<p
						dangerouslySetInnerHTML={{
                            __html: replaceWithBr(gptData.chatgptData.summary),
                        }}
							className='resumeBodyContent'
						/>
					</div>
					<div>
						<h2 className='resumeBodyTitle'>Project History</h2>
						<p
							 dangerouslySetInnerHTML={{
                                __html: replaceWithBr(gptData.chatgptData.projectdescription),
                            }}
							className='resumeBodyContent'
							
						/>
					</div>
                    <div>
						<h2 className='resumeBodyTitle'>Interests</h2>
						
						<div className='resumeBodyContent'>
						{result.interestInfo?.map((interest) => (
								<li key={interest} style={{ display: "inline",margin: "0 60px", padding: "5px 10px", position: "relative" }}>
									<span style={{ fontWeight: "bold" }}>{interest}</span>
									<span style={{ position: "absolute", left: "-8px", top: "12px", content: "''", display: "inline-block", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#000" }}></span>
								</li>
						))} 
						</div>
						
					</div>
				</div>
    </Wrapper>
  );
};
export default ResumeTempThree;