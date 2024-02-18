import axios from "axios";
import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const intialDropDown = ["Daily", "Daily", "Daily"];

function ProgressChart() {
  const [progressData, setProgressData] = useState(null);
  const [dropdownValue, setDropdownValue] = useState(intialDropDown);
  const [loading, setLoading] = useState(true);

  const timeline = ["Daily", "Weekly", "Monthly", "Yearly"];

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await axios.get("./progressData.json");
          setProgressData(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }, 3000);
    };
    fetchData();
  }, []);

  const renderProgressBars = () => {
    if (!progressData) return null;

    return progressData.map((item, index) => (
      <div
        className="flex flex-col items-center justify-center bg-[white] border border-[rgba(218, 227, 248, 1)] rounded-lg p-[0.8vw] w-[15vw]"
        key={item.name}
      >
        <div className="Chart-header text-[1vw] font-medium  m-0 flex justify-between items-center w-full mb-[1vw]">
          <p className="text-gray-500 text-xs font-semibold">{item.name}</p>
          <div className="text-[1vw] font-medium dropdown border border-[rgba(218, 227, 248, 1)] py-[0.3vw] px-[0.2vw]">
            <select
              value={dropdownValue[index]}
              onChange={(e) => {
                const newArr = [...dropdownValue];
                newArr[index] = e.target.value;
                setDropdownValue(newArr);
              }}
            >
              {timeline.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <CircularProgressbar
            value={item[dropdownValue[index].toLowerCase()]}
            text={`${item[dropdownValue[index].toLowerCase()]}%`}
            styles={{
              path: {
                stroke:
                  item[dropdownValue[index].toLowerCase()] >= 70
                    ? "#23af6b"
                    : item[dropdownValue[index].toLowerCase()] >= 50
                    ? "#f3a736"
                    : "#f53360",
                strokeWidth: 7,
              },
              trail: {
                stroke: "rgba(242, 245, 250, 1)",
                strokeWidth: 7,
              },
              text: {
                fill: "rgba(11, 28, 51, 1)",
                fontSize: "1.5vw",
              },
            }}
            width={50}
            height={50}
          />
        </div>
      </div>
    ));
  };

  return (
    <>
      {!loading ? (
        <div className="flex justify-evenly items-center w-[635px] gap-[1vw]">
          {renderProgressBars()}
        </div>
      ) : null}
    </>
  );
}

export default ProgressChart;
