import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { languages } from "../utils/Constants";
import { Context } from "../utils/ContextApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const { searchQuery } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = () => {
    if (searchQuery.trim().length > 0) {
      navigate(`/${searchQuery}/${1}`);
    } else {
      alert("Write something");
    }
  };
  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col justify-normal items-center mt-[50px]">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="" />
          <SearchInput />
          <div className="flex gap-3 text-[#3c4043] mt-7">
            <button
              className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-solid border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
              onClick={searchQueryHandler}
            >
              Google Search
            </button>
            <Link to="https://www.google.com/doodles" className="h-9 flex justify-center items-center px-4 bg-[#f8f9fa] text-sm rounded-md border-solid border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </Link>
          </div>
          <div className="flex mt-6 flex-col md:flex-row items-center">
            <h1 className="mr-[7px] text-[13px] text-[#4D5156]">
              Google offered in:
            </h1>
            <div className="flex flex-wrap justify-center">
              {languages.map((language, index) => {
                return (
                  <span
                    key={index}
                    className="text-[13px] text-[#1558d6] md:text-[#1A0DAB] mr-[9px] hover:underline cursor-pointer"
                  >
                    {language}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
