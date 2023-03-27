import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrapper/ChartsContainer';

import { useSelector } from 'react-redux';

const ChartsContainer = ({color}) => {
  const [barChart, setBarChart] = useState(true);
  const { stats: data } = useSelector(
    (store) => store.applications
  );  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)} style={{color:color}}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} color={color} /> : <AreaChart data={data} color={color} />}
    </Wrapper>
  );
};
export default ChartsContainer;