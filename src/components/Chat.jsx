import Messages from "./Messages";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

const Chat = () => {
  return (
    <div className="flex-1 border border-solid border-gray-300 bg-white rounded-xl mt-2">
      <div className="px-5 py-3 flex w-full justify-between items-center">
        <p className="text-xs text-gray-500 font-bold uppercase">{"Chat"}</p>
      </div>
      <div className="px-5 flex w-full gap-4 flex-col mb-2">
        <Messages
          image={user1}
          name={"Helen Brooks"}
          message="Luna has been scratching her ears a lot lately and shaking her head.
            I checked her ears and they look red and inflamed. She also seems to
            be in pain when I touch them."
          time={"15:36 "}
          notification={"1"}
        />
        <Messages
          image={user2}
          name={"Kathryn Murphy"}
          message="The best way to treat an ear infection is to visit your local vet clinic and get a prescription for ear drops. The ear drops will help clear the infection and reduce th"
          time={"Today"}
          notification={"2"}
        />
        <Messages
          image={user3}
          name={"Helen Brooks"}
          message="Luna has been scratching her ears a lot lately and shaking her head.
            I checked her ears and they look red and inflamed. She also seems to
            be in pain when I touch them."
          time={"Today"}
        />
        <Messages
          image={user4}
          name={"Helen Brooks"}
          message="Luna has been scratching her ears a lot lately and shaking her head.
            I checked her ears and they look red and inflamed. She also seems to
            be in pain when I touch them."
          time={"Today"}
        />
      </div>
    </div>
  );
};

export default Chat;
