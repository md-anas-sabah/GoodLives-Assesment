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
            <tr className="flex gap-7  w-full text-gray-500 text-[13px] font-extralightt">
              <th className="flex  flex-col flex-1 ml-3 leading-5">Name</th>
              <th className="flex flex-1  leading-5">Type</th>
              <th className="flex flex-1  leading-5">Date</th>
              <th className="flex flex-1 gap-1  leading-5">Veteniran</th>
            </tr>
          </thead>
          <tbody className=" flex py-[10px] px-3 border border-gray-200">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold  ml-3  leading-5">
                Rabies
              </td>
              <td className="flex font-bold justify-center flex-1 border border-red-400 bg-red-200 h-7 p-3 items-center rounded-lg text-red-600 leading-5">
                {"Overdue"}
              </td>
              <td className="flex  mr-10 font-bold leading-5">
                {"1 Dec 2023"}
              </td>
              <td className="flex border bg-blue-500 h-8 px-1 font-bold items-center text-white rounded-lg ">
                {"Find veteniran"}
              </td>
            </tr>
          </tbody>
          <tbody className=" flex py-[10px] px-3 border border-gray-200">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold  ml-3  leading-5">
                Bordete lla
              </td>
              <td className="flex font-bold justify-center mr-4 flex-1 border border-yellow-400 bg-yellow-200 h-7 p-3 items-center rounded-lg text-yellow-600 leading-5">
                {"Noncore"}
              </td>
              <td className="flex  mr-[32px] font-bold leading-5">
                {"11 Dec 2023"}
              </td>
              <td className="flex border bg-white h-8   font-bold items-center text-black rounded-lg ">
                {"James Grey"}
              </td>
            </tr>
          </tbody>
          <tbody className=" flex py-[10px] px-3 border border-gray-200">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold  ml-3  leading-5">
                Rabies
              </td>
              <td className="flex font-bold justify-center flex-1 border border-red-400 bg-red-200 h-7 p-3 items-center rounded-lg text-red-600 leading-5">
                {"Overdue"}
              </td>
              <td className="flex  mr-10 font-bold leading-5">
                {"1 Dec 2023"}
              </td>
              <td className="flex border bg-blue-500 h-8 px-1 font-bold items-center text-white rounded-lg ">
                {"Find veteniran"}
              </td>
            </tr>
          </tbody>
          <tbody className=" flex py-[10px] px-3 border border-gray-200  rounded-bl-lg rounded-br-lg">
            <tr className="flex gap-7  w-full   text-black text-[13px] font-extralightt">
              <td className="flex  flex-col flex-1 font-bold  ml-3  leading-5">
                Rabies
              </td>
              <td className="flex font-bold justify-center flex-1 border border-red-400 bg-red-200 h-7 p-3 items-center rounded-lg text-red-600 leading-5">
                {"Overdue"}
              </td>
              <td className="flex  mr-10 font-bold leading-5">
                {"1 Dec 2023"}
              </td>
              <td className="flex border bg-blue-500 h-8 px-1 font-bold items-center text-white rounded-lg ">
                {"Find veteniran"}
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
