import { RiArrowDropDownLine } from "react-icons/ri";
import PropTypes from "prop-types";
import CircleProgressbar from "./CircleProgressbar";

const Card = ({ title, filtersNames, percentage }) => {
  return (
    <div className="w-[220.33px] h-[270px] px-2 flex flex-col border border-solid border-gray-300 bg-white rounded-lg">
      <div className="p-3 flex w-full justify-between items-center">
        <p className="text-xs text-gray-500 font-bold uppercase">{title}</p>
        <div className="p-1  flex items-center rounded-lg border border-gray-300">
          <span className="text-xs font-semibold">{filtersNames}</span>
          <RiArrowDropDownLine className="h-4 w-4 text-blue-400" />
        </div>
      </div>
      <CircleProgressbar percentage={percentage} circleWidth="200" />
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  filtersNames: PropTypes.string,
  percentage: PropTypes.number,
};
