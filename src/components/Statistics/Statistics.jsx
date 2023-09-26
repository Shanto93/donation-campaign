import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const Statistics = () => {

  const [donates, setDonates] = useState([])

  useEffect(() => {
      const donateItems = JSON.parse(localStorage.getItem('donate'));

      if (donateItems) {
          setDonates(donateItems);
      } 

  }, [])

  const data = [
    { name: "Group A", value: donates.length/12 },
    { name: "Group B", value: (12-donates.length)/12 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      {data.map((entry, index) => (
        <Label
          key={`label-${index}`}
          position="center"
          fill={COLORS[index % COLORS.length]}
          value={`${entry.name} ${(entry.value / 1000 * 100).toFixed(2)}%`}
        />
      ))}
    </PieChart>
    </div>
  );
};

export default Statistics;