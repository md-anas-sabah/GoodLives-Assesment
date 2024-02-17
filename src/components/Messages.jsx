import PropTypes from "prop-types";

function Messages({ name, message, time, notification, image }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative w-10">
        <img src={image} alt="user" className="h-10 rounded-lg object-cover" />
        <div className="h-2 w-2 p-[5px] absolute top-0 right-0 bg-green-400 rounded-full"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col w-[22rem]">
          <h1 className="text-xs font-semibold text-black">{name}</h1>
          <p className="truncate text-xs text-gray-500">{message}</p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-xs font-semibold text-black">{time}</p>
          <div className="flex justify-end">
            {notification ? (
              <div className="h-5 w-5  flex p-[5px] items-center text-[10px] bg-red-600 rounded justify-center text-white">
                {notification}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;

Messages.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  notification: PropTypes.string | null,
  image: PropTypes.string,
};
