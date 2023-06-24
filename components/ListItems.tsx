"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Item from "./Item";
const NUMBER_OF_PAGE = 5;
function ListItems() {
  const searchParams = useSearchParams();
  let data = [
    {
      name: "Humaid E.",
      id: "ED 1043",
      title: ["React", "Vue", "Graphic Designer"],
      rate: 4.5,
      completed_project: 23,
      joined: "21st May, 2021",
      description:
        "Passionate about crafting beautiful and functional websites. I love designing engaging graphics.",
      status: "Available",
      profile_image: "",
      cover_image: "",
      expertise: "React",
    },
    {
      name: "John D.",
      id: "JD 2047",
      title: ["Mobile App Developer", "php", "UI Designer"],
      rate: 4.2,
      completed_project: 18,
      joined: "12th January, 2022",
      description:
        "Experienced and creative app developer. I enjoy creating visually appealing user interfaces.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Emily S.",
      id: "ES 3098",
      title: ["Frontend Developer", "Graphic Designer"],
      rate: 4.8,
      completed_project: 35,
      joined: "5th March, 2019",
      description:
        "Passionate about crafting beautiful and functional websites. I love designing engaging graphics.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Sarah M.",
      id: "SM 4085",
      title: ["Backend Developer", "Database Administrator"],
      rate: 4.6,
      completed_project: 27,
      joined: "10th July, 2020",
      description:
        "Experienced in developing robust backend systems and managing databases efficiently.",
      status: "Available",
      profile_image: "",
      cover_image: "",
      expertise: "Vue",
    },
    {
      name: "Alex B.",
      id: "AB 6132",
      title: ["UI/UX Designer", "Illustrator"],
      rate: 4.9,
      completed_project: 40,
      joined: "3rd November, 2018",
      description:
        "Passionate about creating intuitive user experiences. I also love illustrating captivating visuals.",
      status: "Available",
      profile_image: "",
      cover_image: "",
      expertise: "Angular",
    },
    {
      name: "Jennifer L.",
      id: "JL 7120",
      title: ["Frontend Developer", "UI/UX Designer"],
      rate: 4.4,
      completed_project: 31,
      joined: "16th September, 2017",
      description:
        "Skilled in building responsive and user-friendly interfaces. I have a keen eye for design.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Daniel R.",
      id: "DR 8209",
      title: ["Full Stack Developer", "Game Developer"],
      rate: 4.7,
      completed_project: 55,
      joined: "7th April, 2016",
      description:
        "Experienced in developing web applications and interactive games. I love coding and creating fun experiences.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Sophia K.",
      id: "SK 9324",
      title: ["Graphic Designer", "Motion Designer"],
      rate: 4.3,
      completed_project: 22,
      joined: "29th December, 2021",
      description:
        "Passionate about creating visually stunning graphics and captivating motion designs.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Ryan G.",
      id: "RG 0436",
      title: ["Web Developer", "SEO Specialist"],
      rate: 4.6,
      completed_project: 48,
      joined: "14th June, 2015",
      description:
        "Daniel R. building optimized websites and improving search engine rankings.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Emma P.",
      id: "EP 1502",
      title: ["UI/UX Designer", "Brand Identity Designer"],
      rate: 4.8,
      completed_project: 39,
      joined: "23rd August, 2019",
      description:
        "Passionate about crafting user-centric designs and establishing strong brand identities.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Matthew W.",
      id: "MW 2563",
      title: ["Frontend Developer", "UI/UX Designer"],
      rate: 4.5,
      completed_project: 33,
      joined: "2nd February, 2020",
      description:
        "Experienced in developing frontend applications with a focus on creating delightful user experiences.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Olivia R.",
      id: "OR 3654",
      title: ["Graphic Designer", "Illustrator"],
      rate: 4.7,
      completed_project: 28,
      joined: "19th October, 2022",
      description:
        "Passionate about designing visually appealing graphics and creating unique illustrations.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "William C.",
      id: "WC 4779",
      title: ["Full Stack Developer", "UI Designer"],
      rate: 4.6,
      completed_project: 44,
      joined: "9th July, 2018",
      description:
        "Experienced in developing full stack applications with a focus on creating intuitive user interfaces.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "Ava M.",
      id: "AM 5821",
      title: ["Web Developer", "UI/UX Designer"],
      rate: 4.4,
      completed_project: 29,
      joined: "27th March, 2021",
      description:
        "Passionate about building websites and designing user-friendly interfaces.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
    {
      name: "James L.",
      id: "JL 6907",
      title: ["Frontend Developer", "Graphic Designer"],
      rate: 4.9,
      completed_project: 36,
      joined: "8th November, 2019",
      description:
        "Skilled in frontend development and creating visually appealing graphic designs.",
      status: "Available",
      profile_image: "",
      cover_image: "",
    },
  ];

  let [freelancerList, setFreelancerList] = useState(data);

  const [page, setPage] = useState(1);
  const router = useRouter();
  let lastNumber = page * NUMBER_OF_PAGE;
  let firstNumber = lastNumber - NUMBER_OF_PAGE;
  let totalPage = Math.ceil(freelancerList.length / NUMBER_OF_PAGE);
  const paginatoinList = freelancerList.slice(firstNumber, lastNumber);
  useEffect(() => {
    if (
      searchParams.getAll("search") &&
      searchParams.getAll("search").length > 0
    ) {
      const filter = data.filter((item) => {
        if (
          item.description
            .toLocaleLowerCase()
            .includes(searchParams.getAll("search")[0].toLowerCase()) == true ||
          item.name
            .toLocaleLowerCase()
            .includes(searchParams.getAll("search")[0].toLowerCase()) == true
        ) {
          return item;
        } else {
          return null;
        }
      });
      setFreelancerList(filter);
    } else if (
      searchParams.getAll("filter") &&
      searchParams.getAll("filter").length > 0
    ) {
      let searchFilter = searchParams.getAll("filter")[0];
      let searchFilterArray = searchFilter.split("|");
      const filter = data.filter((item) => {
        if (
          item.title.filter((title) =>
            searchFilterArray.includes(title.toLocaleLowerCase())
          ).length > 0
        ) {
          return item;
        } else {
          return null;
        }
      });
      setFreelancerList(filter);
    } else {
      setFreelancerList(data);
    }
  }, [searchParams]);
  return (
    <>
      <div id="searchList" className="bg-[#F7F7F7] py-8">
        <div className="container mx-auto">
          <div className="flex items-stretch justify-center  md:justify-between flex-wrap gap-[30px]">
            {paginatoinList && paginatoinList.length
              ? paginatoinList.map((item, index) => (
                  <Item key={index} profileItem={item} />
                ))
              : "No Data Found"}
          </div>
          {/* Pagination  */}
          {freelancerList.length > NUMBER_OF_PAGE && (
            <div className="flex items-center justify-center mt-8">
              <p>Total Items {freelancerList.length}</p>
              <div className="flex items-center justify-center gap-[10px]">
                <button
                  onClick={() => setPage(page - 1)}
                  className="bg-[#F7F7F7] rounded-md px-4 py-2 text-[#333333] hover:bg-[#EDEDED] hover:text-[#333333] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={page === 1}
                >
                  <IoIosArrowBack />
                </button>
                {Array.from({ length: totalPage }, (_, index) => (
                  <span
                    onClick={() => setPage(index + 1)}
                    className={`cursor-pointer px-2 py-0.5 rounded-sm hover:bg-[#797EF6] 
                  transition-all duration-200 hover:text-white ${
                    index + 1 === page ? "bg-[#797EF6] text-white" : ""
                  }`}
                  >
                    {index + 1}
                  </span>
                ))}
                <button
                  onClick={() => setPage(page + 1)}
                  className="bg-[#F7F7F7] rotate-180 rounded-md px-4 py-2 text-[#333333] hover:bg-[#EDEDED] hover:text-[#333333] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={page === totalPage}
                >
                  <IoIosArrowBack />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListItems;
