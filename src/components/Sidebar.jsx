import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { BsChatSquareText } from "react-icons/bs";
import { TbHealthRecognition } from "react-icons/tb";
import { TbVaccine } from "react-icons/tb";
import { GrSchedule } from "react-icons/gr";
import { TbSettings2 } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="py-4 px-5 bg-white h-full w-[288px] border-r-[1px] flex flex-col">
      <div className="px-3">
        <svg
          width="119"
          height="28"
          viewBox="0 0 119 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_59)">
            <path
              d="M20 5V15C20 17.1217 19.1571 19.1566 17.6569 20.6569C16.1566 22.1571 14.1217 23 12 23C9.87827 23 7.84344 22.1571 6.34315 20.6569C4.84285 19.1566 4 17.1217 4 15V5L7.432 8.432C8.77175 7.49743 10.3665 6.9975 12 7C13.769 7 15.403 7.574 16.728 8.546L20 5Z"
              stroke="#3788E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 18H7L3 22"
              stroke="#3788E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 18H17L21 22"
              stroke="#3788E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18C13 17.7348 12.8946 17.4804 12.7071 17.2929C12.5196 17.1054 12.2652 17 12 17C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18Z"
              stroke="#3788E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13V13.01"
              stroke="#3788E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 13V13.01"
              stroke="#3788E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M44.22 11.24C44.22 11.9467 44.0533 12.6133 43.72 13.24C43.3867 13.8667 42.8533 14.38 42.12 14.78C41.3867 15.1667 40.4467 15.36 39.3 15.36H36.78V21H34.5V7.1H39.3C40.3667 7.1 41.2667 7.28667 42 7.66C42.7467 8.02 43.3 8.51333 43.66 9.14C44.0333 9.76667 44.22 10.4667 44.22 11.24ZM39.3 13.5C40.1667 13.5 40.8133 13.3067 41.24 12.92C41.6667 12.52 41.88 11.96 41.88 11.24C41.88 9.72 41.02 8.96 39.3 8.96H36.78V13.5H39.3ZM56.4945 15.22C56.4945 15.6333 56.4679 16.0067 56.4145 16.34H47.9945C48.0612 17.22 48.3879 17.9267 48.9745 18.46C49.5612 18.9933 50.2812 19.26 51.1345 19.26C52.3612 19.26 53.2279 18.7467 53.7345 17.72H56.1945C55.8612 18.7333 55.2545 19.5667 54.3745 20.22C53.5079 20.86 52.4279 21.18 51.1345 21.18C50.0812 21.18 49.1345 20.9467 48.2945 20.48C47.4679 20 46.8145 19.3333 46.3345 18.48C45.8679 17.6133 45.6345 16.6133 45.6345 15.48C45.6345 14.3467 45.8612 13.3533 46.3145 12.5C46.7812 11.6333 47.4279 10.9667 48.2545 10.5C49.0945 10.0333 50.0545 9.8 51.1345 9.8C52.1745 9.8 53.1012 10.0267 53.9145 10.48C54.7279 10.9333 55.3612 11.5733 55.8145 12.4C56.2679 13.2133 56.4945 14.1533 56.4945 15.22ZM54.1145 14.5C54.1012 13.66 53.8012 12.9867 53.2145 12.48C52.6279 11.9733 51.9012 11.72 51.0345 11.72C50.2479 11.72 49.5745 11.9733 49.0145 12.48C48.4545 12.9733 48.1212 13.6467 48.0145 14.5H54.1145ZM61.3983 11.84V17.94C61.3983 18.3533 61.4916 18.6533 61.6783 18.84C61.8783 19.0133 62.2116 19.1 62.6783 19.1H64.0783V21H62.2783C61.2516 21 60.4649 20.76 59.9183 20.28C59.3716 19.8 59.0983 19.02 59.0983 17.94V11.84H57.7983V9.98H59.0983V7.24H61.3983V9.98H64.0783V11.84H61.3983ZM65.4197 14.02C65.4197 12.66 65.733 11.44 66.3597 10.36C66.9997 9.28 67.8597 8.44 68.9397 7.84C70.033 7.22667 71.2264 6.92 72.5197 6.92C73.9997 6.92 75.313 7.28667 76.4597 8.02C77.6197 8.74 78.4597 9.76667 78.9797 11.1H76.2397C75.8797 10.3667 75.3797 9.82 74.7397 9.46C74.0997 9.1 73.3597 8.92 72.5197 8.92C71.5997 8.92 70.7797 9.12667 70.0597 9.54C69.3397 9.95333 68.773 10.5467 68.3597 11.32C67.9597 12.0933 67.7597 12.9933 67.7597 14.02C67.7597 15.0467 67.9597 15.9467 68.3597 16.72C68.773 17.4933 69.3397 18.0933 70.0597 18.52C70.7797 18.9333 71.5997 19.14 72.5197 19.14C73.3597 19.14 74.0997 18.96 74.7397 18.6C75.3797 18.24 75.8797 17.6933 76.2397 16.96H78.9797C78.4597 18.2933 77.6197 19.32 76.4597 20.04C75.313 20.76 73.9997 21.12 72.5197 21.12C71.213 21.12 70.0197 20.82 68.9397 20.22C67.8597 19.6067 66.9997 18.76 66.3597 17.68C65.733 16.6 65.4197 15.38 65.4197 14.02ZM80.8884 15.44C80.8884 14.3333 81.1151 13.3533 81.5684 12.5C82.0351 11.6467 82.6618 10.9867 83.4484 10.52C84.2484 10.04 85.1284 9.8 86.0884 9.8C86.9551 9.8 87.7084 9.97333 88.3484 10.32C89.0018 10.6533 89.5218 11.0733 89.9084 11.58V9.98H92.2084V21H89.9084V19.36C89.5218 19.88 88.9951 20.3133 88.3284 20.66C87.6618 21.0067 86.9018 21.18 86.0484 21.18C85.1018 21.18 84.2351 20.94 83.4484 20.46C82.6618 19.9667 82.0351 19.2867 81.5684 18.42C81.1151 17.54 80.8884 16.5467 80.8884 15.44ZM89.9084 15.48C89.9084 14.72 89.7484 14.06 89.4284 13.5C89.1218 12.94 88.7151 12.5133 88.2084 12.22C87.7018 11.9267 87.1551 11.78 86.5684 11.78C85.9818 11.78 85.4351 11.9267 84.9284 12.22C84.4218 12.5 84.0084 12.92 83.6884 13.48C83.3818 14.0267 83.2284 14.68 83.2284 15.44C83.2284 16.2 83.3818 16.8667 83.6884 17.44C84.0084 18.0133 84.4218 18.4533 84.9284 18.76C85.4484 19.0533 85.9951 19.2 86.5684 19.2C87.1551 19.2 87.7018 19.0533 88.2084 18.76C88.7151 18.4667 89.1218 18.04 89.4284 17.48C89.7484 16.9067 89.9084 16.24 89.9084 15.48ZM97.4831 11.58C97.8165 11.02 98.2565 10.5867 98.8031 10.28C99.3631 9.96 100.023 9.8 100.783 9.8V12.16H100.203C99.3098 12.16 98.6298 12.3867 98.1631 12.84C97.7098 13.2933 97.4831 14.08 97.4831 15.2V21H95.2031V9.98H97.4831V11.58ZM112.979 15.22C112.979 15.6333 112.952 16.0067 112.899 16.34H104.479C104.546 17.22 104.872 17.9267 105.459 18.46C106.046 18.9933 106.766 19.26 107.619 19.26C108.846 19.26 109.712 18.7467 110.219 17.72H112.679C112.346 18.7333 111.739 19.5667 110.859 20.22C109.992 20.86 108.912 21.18 107.619 21.18C106.566 21.18 105.619 20.9467 104.779 20.48C103.952 20 103.299 19.3333 102.819 18.48C102.352 17.6133 102.119 16.6133 102.119 15.48C102.119 14.3467 102.346 13.3533 102.799 12.5C103.266 11.6333 103.912 10.9667 104.739 10.5C105.579 10.0333 106.539 9.8 107.619 9.8C108.659 9.8 109.586 10.0267 110.399 10.48C111.212 10.9333 111.846 11.5733 112.299 12.4C112.752 13.2133 112.979 14.1533 112.979 15.22ZM110.599 14.5C110.586 13.66 110.286 12.9867 109.699 12.48C109.112 11.9733 108.386 11.72 107.519 11.72C106.732 11.72 106.059 11.9733 105.499 12.48C104.939 12.9733 104.606 13.6467 104.499 14.5H110.599ZM116.143 21.14C115.729 21.14 115.383 21 115.103 20.72C114.823 20.44 114.683 20.0933 114.683 19.68C114.683 19.2667 114.823 18.92 115.103 18.64C115.383 18.36 115.729 18.22 116.143 18.22C116.543 18.22 116.883 18.36 117.163 18.64C117.443 18.92 117.583 19.2667 117.583 19.68C117.583 20.0933 117.443 20.44 117.163 20.72C116.883 21 116.543 21.14 116.143 21.14Z"
            fill="#0B1C33"
          />
          <defs>
            <clipPath id="clip0_4_59">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 2)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="w-full mt-4 ">
        <div className="flex flex-col gap-1">
          <h1 className="uppercase text-bold px-3 text-sm font-semibold text-gray-600 mt-2">
            Menu
          </h1>
          <NavItem
            to="/"
            title={"Dashboard"}
            currentPath={location.pathname}
            preIcon={<MdOutlineDashboard className="h-4 w-4" />}
          />
          <NavItem
            to="/pet-profile"
            title={"Pet Profile"}
            currentPath={location.pathname}
            preIcon={<MdOutlinePets className="h-4 w-4" />}
          />
          <div className="h-[1px] w-full bg-gray-300 mt-2"></div>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <h1 className="uppercase text-bold px-3 text-sm font-semibold text-gray-600 mt-2">
            Analytics
          </h1>
          <NavItem
            to="/health-monitoring"
            title={"Health monitoring"}
            currentPath={location.pathname}
            preIcon={<TbHealthRecognition className="h-4 w-4" />}
          />
          <NavItem
            to="/vaccination-schedule"
            title={"Vaccination schedule"}
            currentPath={location.pathname}
            preIcon={<TbVaccine className="h-5 w-5" />}
          />
          <div className="h-[1px] w-full bg-gray-300 mt-2"></div>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <h1 className="uppercase text-bold px-3 text-sm font-semibold text-gray-600 mt-3">
            schedule
          </h1>
          <NavItem
            to="/chats"
            title={"Chat"}
            currentPath={location.pathname}
            preIcon={<BsChatSquareText className="h-4 w-4" />}
          />
          <NavItem
            to="/appointments"
            title={"Appointments"}
            currentPath={location.pathname}
            preIcon={<GrSchedule className="h-4 w-4" />}
          />
          <div className="h-[1px] w-full bg-gray-300 mt-2"></div>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <h1 className="uppercase text-bold px-3 text-sm font-semibold text-gray-600 mt-3">
            help
          </h1>
          <NavItem
            to="/settings"
            title={"Settings"}
            currentPath={location.pathname}
            preIcon={<TbSettings2 className="h-4 w-4" />}
          />
          <NavItem
            to="/documentation"
            title={"Documentation"}
            currentPath={location.pathname}
            preIcon={<IoDocumentTextOutline className="h-4 w-4" />}
          />
          <div className="h-[1px] w-full bg-gray-300 mt-2"></div>
        </div>
      </div>
      <div className="flex h-full gap-2 flex-row items-end justify-start px-3 text-red-500 font-medium">
        <IoLogOutOutline className="h-5 w-5" />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;

const NavItem = ({ to, title, currentPath, preIcon }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={` px-2 py-2 rounded-lg text-sm  flex items-center gap-2 ${
        isActive ? "bg-blue-500 text-white" : "text-gray-600"
      }`}
    >
      {preIcon} {title}
    </Link>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  currentPath: PropTypes.string,
  preIcon: PropTypes.node,
};
