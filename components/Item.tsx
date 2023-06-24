"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
interface Props {
  profileItem: any;
}
function Item({ profileItem }: Props) {
  return (
    // Freelancer Profile Card
    <div className=" bg-red w-[280px] flex-col">
      <div className="image-wrapper w-100 h-auto">
        <Image
          alt="item-bg"
          src="/images/item-bg.png"
          className="!w-full !h-full cursor-pointer"
          width={100}
          height={100}
        />
      </div>
      <div className="freelancer-area px-5 pt-10 relative bg-[#F7F7F7]">
        <Image
          className="cursor-pointer absolute bottom-0 left-[20%] transform -translate-x-1/2"
          alt="freelancer"
          src="/images/freelancer.png"
          width={70}
          height={100}
        />
        <span className="absolute bottom-1 font-medium right-[10%] text-[#333] text-[10px]">
          Freelancer ID: {profileItem.id}
        </span>
      </div>
      <div className="bg-white flex flex-col gap-2.5 p-5 text-[#808080]">
        <div className="flex items-center gap-[10px]">
          <h1 className="cursor-pointer text-[#333] font-medium">
            {profileItem.name}
          </h1>
          <div className="bg-[#DFF2E3] rounded-full px-2 py-0.5 flex items-center">
            <div className="rounded-full w-3 h-3 bg m-2 ml-0 bg-[#28A745]"></div>
            <span className="text-[#28A745] text-[8px]">
              {profileItem.status}
            </span>
          </div>
        </div>
        <p className="text-[10px]">
          {profileItem.title.map((title: any, index: any) => (
            <span key={index}>{title},</span>
          ))}
        </p>
        <div className="rating">
          <div className="flex item-center gap-2.5">
            <span className="text-[10px] text-[#333]">Client Rating:</span>
            <div className="flex items-center gap-1">
              <AiFillStar fill="#FEC703" />
              <AiFillStar fill="#FEC703" />
              <AiFillStar fill="#FEC703" />
              <AiFillStar fill="#FEC703" />
              <AiFillStar />
            </div>
          </div>
          <p className="text-[10px] text-[#333]">
            Number of Projects completed: {profileItem.completed_project}
          </p>
          <p className="text-[10px] text-[#333]">
            Joined EDGEsince: {profileItem.joined}
          </p>
        </div>
        <p className="text-[10px]">{profileItem.description}</p>
        <Link className="text-[10px] font-medium" href={`/`}>
          View full profile
        </Link>
      </div>
    </div>
  );
}

export default Item;
