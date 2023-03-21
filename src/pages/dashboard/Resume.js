import { useDispatch } from 'react-redux';
import { createResume } from '../../features/resume/resumeSlice';
import { LogoIQ } from '../../components';
import { useSelector } from 'react-redux';
import { useRef, useState} from 'react';
import Wrapper from '../../assets/wrapper/DashboardFormPage';
import { FormRow } from '../../components';
import { toast } from 'react-toastify';
import ResumeDisplay from './ResumeDisplay';


const Resume = () => {

  const {
    isLoading,
    completedResume
  } = useSelector((store) => store.resume);
  const dispatch = useDispatch();
  
  
  const [fullName, setFullName] = useState("");
  const [currentCourse, setCurrentCourse] = useState("");
  const [currentInstitute, setCurrentInstitute] = useState("");
  const [currentTechnologies, setCurrentTechnologies] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);

  const [skillInfo, setSkillInfo] = useState(['']);
  const [projectinfo, setProject] = useState(['']);

  const dataRef = useRef({});


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!fullName || !currentCourse || !currentInstitute || !currentTechnologies || !email || !mobile || projectinfo[0] === ''){
      toast.error('Please Fill in all details')
    } else {
      const details = {
        fullName,
        currentCourse,
        currentInstitute,
        currentTechnologies,
        email,
        mobile,
        projectinfo,
        skillInfo
      };


      dataRef.current = details;
      console.log(dataRef.current);
    
      dispatch(createResume(dataRef.current)) 
    }
  };

  const handleAddProject = () =>{
    setProject([...projectinfo, { project: ""}]);
  }
  
  const handleRemoveProject = (index) => {
      const list = [...projectinfo];
      list.splice(index, 1);
      setProject(list);
  };
  
  
  const handleUpdateProject = (e, index) => {
      const { value } = e.target;
      const list = [...projectinfo];
      list[index] = value;
      setProject(list);
  };
  

  
  const handleAddSkill = () =>{
  setSkillInfo([...skillInfo, { skill: ""}]);
}

const handleRemoveSkill = (index) => {
    const list = [...skillInfo];
    list.splice(index, 1);
    setSkillInfo(list);
};


const handleUpdateSkill = (e, index) => {
    const {  value } = e.target;
    const list = [...skillInfo];
    list[index] = value;
    setSkillInfo(list);
};




 if (isLoading) {
    return (
      <>
      <h2 style={{marginLeft : '38%'}}>Generating Resume</h2>
    <LogoIQ/>
    </>);
  }

  if (completedResume) {
    return (
      <>
    <ResumeDisplay result={dataRef.current} />
    </>);
  }
  

  return (
    <>
    <Wrapper>

            <h1>Resume Builder</h1>
            <p></p>
            <h3 className=''>Some Details about you</h3>
            <form
                onSubmit={handleFormSubmit}
                encType='multipart/form-data'
                className='form'
            >
            {/* fullname */}
              <FormRow
                type='text'
                name='full name'
                value={fullName}
                handleChange={(e) => setFullName(e.target.value)}
              />


                <div className='form-center'>
                      {/* what course? */}
                      <FormRow
                        type='text'
                        name='What course are you in?'
                        value={currentCourse}
                        handleChange={(e) => setCurrentCourse(e.target.value)}
                      />

                   
                      {/* Where do you study */}
                      <FormRow
                        type='text'
                        name='where do you study?'
                        value={currentInstitute}
                        handleChange={(e) => setCurrentInstitute(e.target.value)}
                      />
                  
               
                      {/* current technologies */}
                      <FormRow
                        type='text'
                        name='What is your current technology stack?'
                        value={currentTechnologies}
                        handleChange={(e) => setCurrentTechnologies(e.target.value)}
                      />
                </div>

                <div className='form-center'>
                      {/* email */}
                      <FormRow
                        type='text'
                        name='what is your email?'
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                      />

                   
                      {/* what year do you graduate? */}
                      <FormRow
                        type='text'
                        name='what is your mobile number?'
                        value={mobile}
                        handleChange={(e) => setMobile(e.target.value)}
                      />
                
                </div>
                <p></p>
                <h3 className=''>Add Projects </h3>
                {projectinfo.map((project, index) => (
                <div  key={index}>
             
                      <FormRow
                        type='text'
                        name='project'
                        handleChange={(e) => handleUpdateProject(e, index)}
                      />
                      <p></p>
                    <div className='btn__group'>
                        {projectinfo.length - 1 === index && projectinfo.length < 4 && (
                            <button className='btn edit-btn' id='addBtn' onClick={handleAddProject}>
                                Add
                            </button>
                        )}
                        <p></p>
                        {projectinfo.length > 1 && (
                            <button className='btn delete-btn' id='deleteBtn' onClick={() => handleRemoveProject(index)}>
                                Del
                            </button>
                            
                        )}
                        <p></p>
                    </div>
                </div>
            ))}

                <p></p>
                <h3 className=''>Add some skills</h3>
                {skillInfo.map((skill, index) => (
                <div  key={index}>
             
                      <FormRow
                        type='text'
                        name='Skill'
                        handleChange={(e) => handleUpdateSkill(e, index)}
                      />
                      <p></p>
                    <div className='btn__group'>
                        {skillInfo.length - 1 === index && skillInfo.length < 4 && (
                            <button className='btn edit-btn' id='addBtn' onClick={handleAddSkill}>
                                Add
                            </button>
                        )}
                        <p></p>
                        {skillInfo.length > 1 && (
                            <button className='btn delete-btn' id='deleteBtn' onClick={() => handleRemoveSkill(index)}>
                                Del
                            </button>
                            
                        )}
                        <p></p>
                    </div>
                </div>
            ))}

            

            <button className='btn btn-block submit-btn'>CREATE RESUME</button>
        </form>
        </Wrapper>
    </>
  );
};
export default Resume;