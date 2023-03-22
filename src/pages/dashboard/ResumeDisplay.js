import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { toast } from 'react-toastify';
import html2pdf from 'html2pdf.js';
import { ResumeTempOne, ResumeTempTwo, ResumeTempThree } from "../../components";
import TempOne from '../../assets/images/TempOne.png'
import TempTwo from '../../assets/images/TempTwo.png'
import TempThree from '../../assets/images/TempThree.png'

const ResumeDisplay = ({ result }) => {


	const componentRef = useRef();
	const [image, setImage] = useState();
	const [template, setTemplate] = useState(1);
	const [color, setColor] = useState("#faebd7");

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: `${result.fullName} Resume`,
		onBeforePrint: () => toast.success("Page Complied for print!"),
	});
	useEffect(() => {
		const url = URL.createObjectURL(result.selectedFile)
		setImage(url)
		} , []);



	const downloadPDF = () => {
		const input = componentRef.current;
		html2pdf(input, {
		  
		  filename: 'my_resume.pdf',
		  image: { type: 'jpeg', quality: 0.98 },
		  html2canvas: { scale: 2 },
		  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		});
	  };
	return (
		<>
		<div>
			<h2>Templates</h2>
			<button className='btn submit-btn ' onClick={() => setTemplate(1)}>
						Template One 
						<br></br>
						<br></br>
							 <img
                            src={TempOne}
                            alt={'TempOne'}
							style={{height:80, width:100}}
                        /></button>
			{' '}
			<button className='btn submit-btn ' onClick={() => setTemplate(2)}>
						Template Two 
						<br></br>
						<br></br>
							 <img
                            src={TempTwo}
                            alt={'TempTwo'}
							style={{height:80, width:100}}
                        /></button>
			{' '}
            <button className='btn submit-btn ' onClick={() => setTemplate(3)}>
						Template Three 
						<br></br>
						<br></br>
							 <img
                            src={TempThree}
                            alt={'TempThree'}
							style={{height:80, width:100}}
                        /></button>
			</div>
			<br/>
			<div>
			<h2>Colors</h2>
			<button style={{background: "#065535"}} className='btn submit-btn ' onClick={() => setColor("#065535")}> </button>
			{' '}
			<button style={{background: "#133337"}} className='btn submit-btn ' onClick={() => setColor("#133337")}> </button>
			{' '}
			<button style={{background: "#ffd700"}} className='btn submit-btn ' onClick={() => setColor("#ffd700")}> </button>
			{' '}
			<button style={{background: "#b0e0e6"}} className='btn submit-btn ' onClick={() => setColor("#b0e0e6")}> </button>
			{' '}
			<button style={{background: "#c0c0c0"}} className='btn submit-btn ' onClick={() => setColor("#c0c0c0")}> </button>
			{' '}
			<button style={{background: "#c39797"}} className='btn submit-btn ' onClick={() => setColor("#c39797")}> </button>
			{' '}
			<button style={{background: "#ffdab9"}} className='btn submit-btn ' onClick={() => setColor("#ffdab9")}> </button>
			{' '}
			<button style={{background: "#8b0000"}} className='btn submit-btn ' onClick={() => setColor("#8b0000")}> </button>
			{' '}
			<button style={{background: "#794044"}} className='btn submit-btn ' onClick={() => setColor("#794044")}> </button>
			{' '}
			<button style={{background: "#468499"}} className='btn submit-btn ' onClick={() => setColor("#468499")}> </button>
			{' '}
			<button style={{background: "#faebd7"}} className='btn submit-btn ' onClick={() => setColor("#faebd7")}> </button>
			{' '}
			</div>
			<br/>
			{ template == 1 ?
			<main className='containerdisplay' ref={componentRef}>
			<ResumeTempOne result={result} image={image} color={color}/>
			</main>
			: template == 2 ? 
			<main className='containerdisplay' ref={componentRef}>
			<ResumeTempTwo result={result} image={image}  color={color}/>
			</main>
			: template == 3 ?
			<main className='containerdisplay' ref={componentRef}>
			<ResumeTempThree result={result} image={image}  color={color}/>
			</main>
			:
			''
			} 
			<br/>
			<div>
			<button className='btn submit-btn' onClick={handlePrint}>Print Page</button>
			{' '}
            <button className='btn submit-btn' onClick={downloadPDF}>Download PDF</button>
			</div>
		</>
	);
};

export default ResumeDisplay;