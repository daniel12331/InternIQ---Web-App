import Wrapper from '../assets/wrapper/StatItem';
import { FaArchive } from 'react-icons/fa';

const StatItemEmployer = ({ totalApplicants, position, color, bcg }) => {
  return (
    <Wrapper color={'red'} bcg={'white'}>
      <h5 className='title'>{position}</h5>
      <header>
      <span className='title'>Total Applicants:</span>
        <span className='count'>{totalApplicants}</span>
        <span className='icon'>{<FaArchive/>}</span>
      </header>
    </Wrapper>
  );
};
export default StatItemEmployer;