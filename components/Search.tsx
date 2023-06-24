"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from "next/navigation";

function Search() {
  const router = useRouter();
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const searchParams = useSearchParams();
  const searchKeyword = function (keyword: string) {
    let url = ``;
    if (searchParams.getAll("filter").length > 0) {
      url = `/?search=${keyword}&filter=${searchParams.getAll("filter")[0]}`;
    } else {
      url = `/?search=${keyword}`;
    }
    router.push(`${url}`);

    setTimeout(() => {
      scrolltoHash("searchList");
    }, 100);
  };
  const [keyWords, setKeyWords] = useState<string[]>([]);
  const [key, setKey] = useState<string>("");
  const removeKeyWord = (item: string) => {
    let keys = keyWords.filter((key) => key !== item);
    setKeyWords(keys);
  };
  const handleKeySubmit = (e: any) => {
    e.preventDefault();
    if (keyWords.includes(key)) return;
    setKeyWords([...keyWords, key]);
    // let value = e.currentTarget.value;
    setKey("");
  };

  return (
    <div className="container mx-auto mt-[98px] pb-3 border-b-2">
      <div className="flex flex-wrap gap-2.5 items-center justify-between">
        <form onSubmit={handleKeySubmit}>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Search Keywords"
            className="flex-1 text-2xl placeholder:text-[#808080] px-4 py-4 placeholder:text-3xl outline-none bottom-0 focus:ring-0 focus:outline-none"
          />
        </form>

        <div className="flex items-center gap-[20px] flex-wrap">
          {keyWords.map((item, index) => (
            <div
              key={index}
              className="flex w-max items-center gap-2.5 cursor-pointer px-5 py-2.5 bg-[#F7F7F7] rounded-full"
            >
              <span onClick={() => searchKeyword(item)}>{item}</span>
              <RxCross2 onClick={() => removeKeyWord(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
