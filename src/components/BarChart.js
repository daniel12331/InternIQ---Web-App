import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';

  
  const BarChartComponent = ({ data, color}) => {


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
        <BarChart data={applicantsData} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray='10 10 ' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey='count' fill={color} barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  export default BarChartComponent;