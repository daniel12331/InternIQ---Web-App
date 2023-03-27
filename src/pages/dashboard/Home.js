import { useEffect } from 'react';
import { StatsContainer, InterviewTips, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/applications/allApplictionSlice';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const Home = () => {
  const { stats } = useSelector(
    (store) => store.applications
  );
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(showStats());
  }, []);
const color = '#3b82f6'
  return (
    <>

      <StatsContainer />
      {stats?.length > 0 && <ChartsContainer color={color} />}

      <InterviewTips />
    </>
  );
};
export default Home;
