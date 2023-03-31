// import React from 'react';

// type resultValues = {
//   changeRate: number;
//   year: number;
//   month: number;
// }[];

// const marketValues: resultValues = [
//   {
//     changeRate: 1.1,
//     year: 2021,
//     month: 2,
//   },
//   {
//     changeRate: 1.3,
//     year: 2021,
//     month: 2,
//   },
//   {
//     changeRate: 1.3,
//     year: 2021,
//     month: 2,
//   },
//   {
//     changeRate: 2,
//     year: 2021,
//     month: 2,
//   },
// ];

// const strategyValues: resultValues = [
//   {
//     changeRate: 1.4,
//     year: 2021,
//     month: 2,
//   },
//   {
//     changeRate: 1.3,
//     year: 2021,
//     month: 2,
//   },
//   {
//     changeRate: 1.8,
//     year: 2021,
//     month: 2,
//   },
//   {
//     changeRate: 10,
//     year: 2021,
//     month: 2,
//   },
// ];

// const BacktestResult = () => {
//   return (
//     <React.Fragment>
//       <p>결과 페이지</p>
//     </React.Fragment>
//   );
// };

// export default BacktestResult;

// import "./styles.css";
// import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  // {
  //   name: '2022-03',
  //   sta: 4000,
  //   mar: 2400,
  // },
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BacktestResult() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='pv'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
      <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
    </LineChart>
  );
}
