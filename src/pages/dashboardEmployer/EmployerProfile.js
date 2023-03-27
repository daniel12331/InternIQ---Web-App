import { useState } from 'react';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrapper/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateEmployer } from '../../features/employer/employerSlice';

const EmployerProfile = () => {
  const { isLoading, employer } = useSelector((store) => store.employer);

  const dispatch = useDispatch();
  const [employerData, setEmployerData] = useState({
    organisationname: employer?.organisationname || '',
    organisationemail: employer?.organisationemail || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { organisationname, organisationemail } = employerData;

    if (!organisationname || !organisationemail ) {
      toast.error('please fill out all fields');
      return;
    }
    dispatch(updateEmployer(employerData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployerData({ ...employerData, [name]: value });
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='organisationname'
            value={employerData.organisationname}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={employerData.organisationemail}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default EmployerProfile;