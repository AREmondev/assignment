"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function Filter() {
  let filterSelect = [
    {
      name: "Job category",
      subItem: ["React", "Vue", "svelt"],
    },
    {
      name: "Experience level",
      subItem: ["Angula", "Nuxt", "Next"],
    },
    {
      name: "Location",
      subItem: ["PHP", "Laravel", "Tailwind"],
    },
    {
      name: "skills",
      subItem: ["Node", "Mongo", "Prisma"],
    },
  ];
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const searchParams = useSearchParams();

  const [selectedMenu, setSelectedMenu] = useState("");
  const router = useRouter();
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const filerKey = searchParams.getAll("filter")[0];
    let extendUrl = "";
    if (searchParams.getAll("search").length > 0) {
      extendUrl = "&search=" + searchParams.getAll("search")[0];
    }
    if (filerKey) {
      let splitFilter = filerKey.split("|");
      if (checked && !splitFilter.includes(value.toLocaleLowerCase())) {
        splitFilter.push(value.toLocaleLowerCase());
        router.push(`/?filter=${splitFilter.join("|")}${extendUrl}`, {
          scroll: false,
        });
      } else {
        let newFilter = splitFilter.filter(
          (item) => item !== value.toLocaleLowerCase()
        );
        router.push(`/?filter=${newFilter.join("|")}${extendUrl}`);
      }
    } else {
      router.push(`/?filter=${value.toLocaleLowerCase()}${extendUrl}`);
    }
    setTimeout(() => {
      scrolltoHash("searchList");
    }, 100);
  };
  const clearFilter = () => {
    setSelectedMenu("");
    router.push("/");
  };
  return (
    <div className="container mx-auto py-16">
      <div className="flex relative flex-wrap items-center gap-2.5">
        {filterSelect.map((item, index) => (
          <div
            onClick={() => setSelectedMenu(item.name)}
            key={index}
            className="relative select-box rounded-md border border-[#808080] text-[#808080] flex items-center justify-center gap-2.5 min-w-sm max-w-64 p-4"
          >
            <h4>
              <span>{item.name}</span>
            </h4>
            <MdOutlineKeyboardArrowDown />
            {selectedMenu === item.name && (
              <div className="absolute z-10 rounded-sm  bg-white p-2 overflow-hidden bottom-0 transform translate-y-[110%] shadow-sm min-w-full left-0">
                {item.subItem.map((subItem, index) => (
                  <div key={index} className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <input
                        value={subItem}
                        onChange={(e) => changeFilter(e)}
                        type="checkbox"
                        name="subItem"
                        id={subItem}
                      />
                      <label htmlFor={subItem}>{subItem}</label>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => clearFilter()}
          className="bg-[#797EF6] px-8 py-3 rounded-md text-white"
        >
          Clear all Filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
