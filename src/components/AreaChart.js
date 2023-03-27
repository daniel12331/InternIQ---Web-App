import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from 'recharts';
  
  const AreaChartComponent = ({ data, color }) => {

    const applicantsByMonth = data.reduce((acc, data) => {
      const date = new Date(data.createdAt);
      const day = date.getDate(); 
      const month = date.getMonth() + 1; 
      const year = date.getFullYear(); 
      const key = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`; // format key as "YYYY-MM-DD"
    
      acc[key] = acc[key] || { date: key, count: 0 };
      acc[key].count++;
    
      return acc;
    }, {});
    
    const applicantsData = Object.values(applicantsByMonth);
    return (
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={applicantsData} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area type='monotone' dataKey='count' stroke='#1e3a8a' fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    );
  };
  export default AreaChartComponent;