import React from "react";
import {GoArrowUpRight} from "react-icons/go"
import SocialLink from "./SocialLink";
const Contact = () => {
  return (
    <div className="wrapper ">
   <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
   <h1 className="text-2xl font-semibold ">Let us create awesome products!</h1>
      <p className="text-lg tracking-wide  font-medium text-center">
        I am always open to discussing your project, improving your online
        presence, or helping with Your website design and converting challenges.
      </p>
     <a href="mailto:mdabubakor119@gmail.com">
     <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">Contact</button>
     </a>
     <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
        <SocialLink text="GitHub" link="https://github.com/mdabubakor/Abubakor"/>
        <SocialLink text="Youtube" link="https://youtube.com"/>
        <SocialLink text="Linkedin" link="https://linkedin.com"/>
        <SocialLink text="Facebook"  link="https://www.facebook.com/mdabubakor13"/>
     </div>
   </div>
    </div>
  );
};

export default Contact;
