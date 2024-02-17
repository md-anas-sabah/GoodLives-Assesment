import { IoMdSearch } from "react-icons/io";
import { TbInfoHexagon } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";

function Navbar() {
  return (
    <div className="h-16 bg-white flex items-center justify-between">
      <div className="mx-4 border-gray-300 text-gray-500 p-4 rounded-lg h-8 w-[700px] border flex items-center gap-2">
        <IoMdSearch className="h-4 w-4" />
        <input type="text" placeholder="Search" className="w-full focus:outline-none" />
      </div>
      <div className="flex gap-6 px-5 items-center">
        <TbInfoHexagon className="h-6 w-6" />
        <IoIosNotificationsOutline className="h-6 w-6" />
        <button className="bg-[#3788E5] p-2 rounded-lg text-white">
          Add widget
        </button>
      </div>
    </div>
  );
}

export default Navbar;
