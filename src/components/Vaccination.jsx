import PropTypes from "prop-types";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

const Vaccination = ({ title, filtersNames }) => {
  return (
    <div className="flex-1 border border-solid border-gray-300 bg-white rounded-xl">
      <div className="py-3 px-5 flex w-full justify-between items-center">
        <p className="text-xs text-gray-500 font-bold uppercase">{title}</p>
        <div className="flex items-center gap-3">
          <IoMdSearch />
          <div className="p-1 px-2  flex items-center rounded-lg border border-gray-300">
            <span className="text-xs font-semibold">{filtersNames}</span>
            <RiArrowDropDownLine className="h-4 w-4 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="px-5 mb-4">
        <table className="w-full">
          <thead className="flex py-[10px]  bg-[#F2F2F2] border border-gray-200 rounded-tl-lg rounded-tr-lg">
            <tr className="flex gap-3  w-full text-gray-500 text-[13px] font-extralightt">
              <th className="flex  flex-col flex-1 leading-5">Name</th>
              <th className="flex flex-1  leading-5">Type</th>
              <th className="flex flex-1  leading-5">Date</th>
              <th className="flex flex-1 gap-1  leading-5">Veteniran</th>
            </tr>
          </thead>
          <tbody className=" flex py-[10px] px-3 border border-gray-200">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold   leading-5">
                Rabies
              </td>
              <td className="flex font-bold justify-center flex-1 border border-red-400 bg-red-200 h-7  items-center rounded-lg text-red-600 leading-5">
                {"Overdue"}
              </td>
              <td className="flex mr-10 font-bold leading-5">{"1 Dec 2023"}</td>
              <td className="flex border bg-blue-500 h-8  font-bold items-center text-white rounded-lg ">
                {"Find veteniran"}
              </td>
            </tr>
          </tbody>
          <tbody className=" flex py-[10px] px-3 border border-gray-200">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold   leading-5">
                Bordete lla
              </td>
              <td className="flex font-bold justify-center mr-7 w-5 flex-1 border border-yellow-400 bg-yellow-200 h-7 p-3 items-center rounded-lg text-yellow-600 leading-5">
                {"Noncore"}
              </td>
              <td className="flex font-bold mr-7 leading-5">{"11 Dec 2023"}</td>
              <td className="flex border bg-white h-8  font-bold items-center text-black rounded-lg ">
                {"James Grey"}
              </td>
            </tr>
          </tbody>
          <tbody className=" flex py-[10px] px-3 border border-gray-200">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold  leading-5">
                Rabies
              </td>
              <td className="flex font-bold mr-7 justify-center flex-1 border border-red-400 bg-red-200 h-7  items-center rounded-lg text-red-600 leading-5">
                {"Overdue"}
              </td>
              <td className="flex  mr-10 font-bold leading-5">
                {"1 Dec 2023"}
              </td>
              <td className="flex border bg-white h-8   font-bold items-center text-black rounded-lg ">
                {"Jim Brown"}
              </td>
            </tr>
          </tbody>
          <tbody className=" flex py-[10px] px-3 border border-gray-200  rounded-bl-lg rounded-br-lg">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold  leading-5">
                Rabies
              </td>
              <td className="flex font-bold mr-5 justify-center flex-1 border border-red-400 bg-red-200 h-7 items-center rounded-lg text-red-600 leading-5">
                {"Overdue"}
              </td>
              <td className="flex  mr-6 font-bold leading-5">{"1 Dec 2023"}</td>
              <td className="flex border bg-white h-8   font-bold items-center text-black rounded-lg ">
                {"Helen Brooks"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vaccination;

Vaccination.propTypes = {
  title: PropTypes.string,
  filtersNames: PropTypes.string,
};

// import React from "react";

// import { TbSearch } from "react-icons/tb";

// const Schedule = () => {
//   const [scheduleData, setScheduleData] = React.useState(null);
//   const [dropdownValue, setDropdownValue] = React.useState("");
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       setTimeout(() => {
//         fetch("/scheduleData.json")
//           .then((response) => response.json())
//           .then((data) => {
//             setScheduleData(data);
//             setLoading(false);
//           })
//           .catch((error) => console.log(error));
//       }, 2000);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="Schedule">
//       {loading ? (
//         <div className="Loading">Loading...</div>
//       ) : (
//         <div>
//           <div className="Schedule-Header">
//             <p>VACCINATION SCHEDULE</p>
//             <div className="Schedule-Header-Right">
//               <div className="Searchbar-Icon">
//                 <TbSearch />
//               </div>
//               <div className="dropdown">
//                 <select
//                   value={dropdownValue}
//                   onChange={(e) => {
//                     setDropdownValue(e.target.value);
//                   }}
//                 >
//                   <option value="" disabled>
//                     By Type
//                   </option>
//                   <option value="All">All</option>
//                   <option value="Overdue">Overdue</option>
//                   <option value="Noncore">Noncore</option>
//                   <option value="Core">Core</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="Schedule-Table">
//             <div className="Schedule-Table-Header">
//               <p className="Table-Name">Name</p>
//               <p className="Table-Type-Head">Type</p>
//               <p className="Table-Date">Date</p>
//               <p className="Table-Veterinar-Head">Veterinar</p>
//             </div>
//             {scheduleData &&
//               scheduleData.map((item, index) => {
//                 if (
//                   dropdownValue === "" ||
//                   dropdownValue === "All" ||
//                   item.type === dropdownValue
//                 )
//                   return (
//                     <div key={index} className="Schedule-Table-Item">
//                       <p className="Table-Name">{item.name}</p>
//                       <div className="Table-Type-Head">
//                         <div className={"Table-Type " + item.type}>
//                           {item.type}
//                         </div>
//                       </div>
//                       <p className="Table-Date">{item.date}</p>
//                       <div className="Table-Veterinar-Head">
//                         {item.veterinar ? (
//                           <p className="Table-Veterinar">{item.veterinar}</p>
//                         ) : (
//                           <p className="Table-Veterinar Find">Find veterinar</p>
//                         )}
//                       </div>
//                     </div>
//                   );
//               })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Schedule;
