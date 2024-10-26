import { useState,useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import {Context} from "../utils/ContextApi"
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  // const { query } = useParams();
  const {searchQuery,setSearchQuery} = useContext(Context)
  // const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.trim().length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
    if (e.key === "Enter" && !searchQuery.trim().length > 0) {
      alert("Write something")
    }
  };
  return (
    <div
      id="searchBox"
      className="h-[46px] mt-[-5px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c3  focus-within:shadow-c3"
    >
      <AiOutlineSearch
        color="#9aa0a6"
        className="md:h-[18px] md:w-[18px] h-[24px] w-[24px]"
      />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        className="grow outline-0 text-black/[0.87] w-[45%]"
      />
      <div className="flex items-center gap-4">
        {searchQuery.trim() === "" ? (
          ""
        ) : (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
