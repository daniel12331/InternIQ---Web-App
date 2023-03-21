import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { toast } from 'react-toastify';

const ResumeDisplay = ({ result }) => {
    const {
        gptData
      } = useSelector((store) => store.resume);

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: `${result.fullName} Resume`,
		onBeforePrint: () => toast.success("Page Complied for print!"),
	});

	const replaceWithBr = (string) => {
		return string.replace(/^\n{2}/, '').replace(/\n/g, '<br>');
	};


	return (
		<>
			
			<main className='container' ref={componentRef}>
				<header className='header'>
					<div>
						<h1>{result.fullName}</h1>
						<p className='resumeTitle headerTitle'>
							{result.currentCourse} - {result.currentInstitute}
						</p>
						
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
						<h2 className='resumeBodyTitle'>Skills</h2>
						{result.skillInfo?.map((skill) => (
							<p className='resumeBodyContent' key={skill}>
								<span style={{ fontWeight: "bold" }}>{skill}</span>
							</p>
						))}
					</div>
				</div>
			</main>
            <button className='btn submit-btn' onClick={handlePrint}>Print Page</button>
		</>
	);
};

export default ResumeDisplay;