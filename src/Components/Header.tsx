import React from "react";
import Container from "./Container";
import AB from "../Assets/Aboubakor.jpg";
import Image from "next/image";

const Header = () => {
  return (
      <div className="wrapper">
        <Container>
          <div className=" flex flex-col md:flex-row items-center gap-10">
            <div className="w-44 h-44 rounded-full bg-black">
              {/* image */}
              <Image
                className="w-full h-full rounded-full border-[1px] border-indigo-800 p-2 object-cover"
                src={AB}
                alt="profile image"
              />
            </div>
            <div className={'w-3/4  grid items-center md:items-start  gap-2 '}>
              {/* description */}
              <h1 className="text-5xl font-bold text-white">Abu Bakar</h1>
              <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to bg-indigo-400">Full Stack Developer</h3>
              <p className="text-base tracking-wide text-center md:text-left">
                Graduate of computer engineeing with more than 8 month of hands-on
                experience working across the full-stack of web development .i
                have built a few projects by myself and i am looking for a role
                where i can grow and learn from other experienced team members.
              </p>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default Header;
