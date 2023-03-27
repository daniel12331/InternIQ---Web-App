import { useEffect } from 'react';
import { StatsContainerEmployer, Loading, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/applications/allApplictionSlice';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);

const color = 'red';

  return (
    <>
      <StatsContainerEmployer />
       <ChartsContainer color={color} />
    </>
  );
};
export default Home;