"use client";
import { FaBell } from "react-icons/fa";
import { Dropdown, Breadcrumb } from "../shared";

const Topbar = () => {
  return (
    <div className="w-full flex flex-col justify-between h-[70px] py-1 px-2 bg-white text-black">
      <section className="flex justify-between items-center">
        <p className="font-bold text-base">
          Welcome back <span className="text-lg">user</span>
        </p>
        <div className="flex justify-between items-center gap-3">
          <Dropdown />
          <FaBell className="text-blue-600 " />
          <div className="h-8 w-9 bg-gray-500"></div>
        </div>
      </section>
      <section>
        <Breadcrumb />
      </section>
    </div>
  );
};

export { Topbar };
