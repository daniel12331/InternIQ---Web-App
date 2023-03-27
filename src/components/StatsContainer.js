import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrapper/StatsContainer';
import { useSelector } from 'react-redux';

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.applications);  
  
  const declined = stats?.reduce((acc, stats) => {
    if (stats.status === 'declined') {
      return acc + 1;
    }
    return acc;
  }, 0);

  const interview = stats?.reduce((acc, stats) => {
    if (stats.status === 'interview') {
      return acc + 1;
    }
    return acc;
  }, 0);

  const pending = stats?.reduce((acc, stats) => {
    if (stats.status === 'pending') {
      return acc + 1;
    }
    return acc;
  }, 0);
  
  

  const defaultStats = [
    {
      title: 'pending applications',
      count: pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;