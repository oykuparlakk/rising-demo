import { useState } from "react";
import Image from "next/image";
import { Card, Home, Logout, User } from "./icons";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  return (
    <div className="w-24 h-12/12 border-r-2 border-accent-100 flex gap-5 py-5 flex-col items-center justify-start ">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center">
        <Image
          src="/rising-demo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div
        className={`w-14 h-14 flex items-center justify-center rounded-2xl cursor-pointer ${
          activeIcon === "home" ? "bg-primary-100 " : ""
        }`}
        onClick={() => setActiveIcon("home")}
      >
        <Home className="w-8 h-8" />
      </div>

      <div
        className={`w-14 h-14 flex items-center justify-center rounded-2xl cursor-pointer ${
          activeIcon === "card" ? "bg-primary-100 " : ""
        }`}
        onClick={() => setActiveIcon("card")}
      >
        <Card className="w-8 h-8" />
      </div>

      <div
        className={`w-14 h-14 flex items-center justify-center rounded-2xl cursor-pointer ${
          activeIcon === "user" ? "bg-primary-100 " : ""
        }`}
        onClick={() => setActiveIcon("user")}
      >
        <User className="w-8 h-8" />
      </div>

      <div
        className={`w-14 h-14 flex items-center justify-center rounded-2xl cursor-pointer ${
          activeIcon === "logout" ? "bg-primary-100 " : ""
        }`}
        onClick={() => setActiveIcon("logout")}
      >
        <Logout className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Sidebar;
