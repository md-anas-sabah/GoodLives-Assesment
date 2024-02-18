import Chart from "react-apexcharts";
import axios from "axios";
import { useState, useEffect } from "react";

import { TbHeartBolt } from "react-icons/tb";
import { RiPulseLine } from "react-icons/ri";
import { TbTemperature } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";

const Graph = () => {
  const [changeCalender, setChangeCalender] = useState("monthly");
  const [data, setData] = useState([]);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get("./chartData.json");
          setData(response.data);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!data.length) {
    return (
      <div className=" w-[700px] bg-gray-500 border border-[rgba(218, 227, 248, 1)] p-[0.8vw] h-full mt-[15px] rounded-lg animate-pulse"></div>
    );
  }

  const handleTitleChange = (index) => {
    setTitleIndex(index);
  };

  return (
    <div className=" w-[700px] bg-white border border-[rgba(218, 227, 248, 1)] p-[0.8vw] rounded-lg h-[350px] mt-[15px]">
      <div className="flex justify-between items-center w-full mb-[1vw]">
        <p className="text-sm text-gray-400">HEALTH MONITORING</p>
        <div className="text-[1vw] font-medium border border-[rgba(218, 227, 248, 1)] rounded-sm py-[0.3vw] px-[0.2vw]">
          <select
            value={changeCalender}
            onChange={(e) => {
              setChangeCalender(e.target.value);
            }}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-[1vw] justify-between mb-[1vw] border border-[rgba(218, 227, 248, 1)] rounded-lg p-[0.8vw] text-[1vw] font-medium ">
        {data.map((item, index) => (
          <div
            className={
              index === titleIndex
                ? "p-[0.5vw] rounded-lg pointer flex justify-between Option active items-center gap-[0.5vw] text-[rgba(55, 136, 229, 1)] active:bg-[rgba(55, 136, 229, 1)] active:text-white "
                : "Option"
            }
            key={index}
            onClick={() => handleTitleChange(index)}
          >
            {index === 0 && <TbHeartBolt />}
            {index === 1 && <RiPulseLine />}
            {index === 2 && <TbTemperature />}
            {index === 3 && <AiOutlineFire />}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <Chart
        options={{
          chart: {
            id: "area-chart",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: Object.keys(data[titleIndex][changeCalender]),
            labels: {
              style: {
                fontSize: "1vw",
                fontWeight: 500,
                color: "rgba(11, 28, 51, 0.7)",
              },
            },
          },
          series: [
            {
              name: data[titleIndex].title,
              data: Object.values(data[titleIndex][changeCalender]),
            },
          ],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
            width: 2,
            colors: ["rgb(55, 136, 229)"],
          },
          fill: {
            type: "gradient",
            colors: ["rgb(55, 136, 229)"],
          },
        }}
        series={[
          {
            name: data[titleIndex].title,
            data: Object.values(data[titleIndex][changeCalender]),
          },
        ]}
        type="area"
        height={200}
      />
    </div>
  );
};

export default Graph;
