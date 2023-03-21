import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { toast } from 'react-toastify';

const ResumeDisplay = ({ result }) => {
    const {
        gptData
      } = useSelector((store) => store.resume);

	const componentRef = useRef();
	const [image, setImage] = useState();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: `${result.fullName} Resume`,
		onBeforePrint: () => toast.success("Page Complied for print!"),
	});

	useEffect(() => {
		const url = URL.createObjectURL(result.selectedFile)
		setImage(url)
		} , []);

	const replaceWithBr = (string) => {
		return string.replace(/^\n{2}/, '').replace(/\n/g, '<br>');
	};


	return (
		<>
			{console.log(image)}
			<main className='containerdisplay' ref={componentRef}>
				<header className='header'>
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
			</main>
            <button className='btn submit-btn' onClick={handlePrint}>Print Page</button>
		</>
	);
};

export default ResumeDisplay;