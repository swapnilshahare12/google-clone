import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";
import googleLoading from "../assets/googleloading.gif";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch, searchQuery, setSearchQuery } = useContext(Context);

  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, imageSearch, searchQuery]);

  const fetchSearchResult = () => {
    const payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };
  // if (!result) return;
  // const { items, queries, searchInformation } = result;

  return (
    <>
      {result ? (
        <div className="flex flex-col min-height-[100vh]">
          <SearchResultHeader />
          <main className="grow p-[12px] pb-0 md:pl-20">
            <div className="flex text-[14px] font-normal text-[#70757A] mb-3">
              {`${result?.searchInformation.formattedTotalResults} results (${result?.searchInformation.formattedSearchTime} Seconds)`}
            </div>
            {!imageSearch ? (
              <>
                {result?.items.map((item, index) => (
                  <SearchedItemTemplate key={index} data={item} />
                ))}
              </>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                {result.items.map((item, index) => (
                  <SearchedImageItemTemplate key={index} data={item} />
                ))}
              </div>
            )}
            <Pagination queries={result?.queries} />
          </main>
          <Footer />
        </div>
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <img src={googleLoading} alt="" className="object-cover"/>
        </div>
      )}
    </>
  );
};

export default SearchResult;
