import { TbGridDots } from "react-icons/tb";
import Grid from "../assets/grid.svg";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <img src={Grid} alt="" size={10}  color="#5f6368"/>
      </span>
      <span className="h-10 w-10 relative flex items-center justify-center">
        <span className="h-8 w-8 rounded-full overflow-hidden cursor-pointer">
          <img className="h-full w-full object-cover" src={Profile} alt="" />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
