import React from "react";
import { GiSkills } from "react-icons/gi";
import Title from "./Title";

import Skillsinput from "./Skillsinput";
const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <Skillsinput title="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
        <Skillsinput title="Reactjs" link="https://react.dev/"/>
        <Skillsinput title="Nextjs" link="https://nextjs.org/"/>
        <Skillsinput title="Node" link="https://nodejs.org/en"/>
        <Skillsinput 
        title="Typescript" 
        link="https://www.typescriptlang.org/"/>
        <Skillsinput title="Reduxtoolkit" link="https://redux-toolkit.js.org/"/>
        <Skillsinput title="MongoDB" link="https://www.mongodb.com/"/> <br/>
        <Skillsinput title="Google Firebase" link="https://firebase.google.com/"/>
        <Skillsinput title=" Tailsind Css" link="https://tailwindcss.com/"/>
        <Skillsinput title=" Css3" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
        <Skillsinput title=" HTML 5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"/>
        <Skillsinput title="VS Code" link="https://code.visualstudio.com/"/>
        <Skillsinput title="Git" link="https://git-scm.com/"/>
        <Skillsinput title="GitHub" link="https://github.com/"/>
        <Skillsinput title="Figma" link="https://www.figma.com/"/>
        <Skillsinput title="Canva" link="https://www.canva.com/"/>
        <Skillsinput title="Varcel" link="https://vercel.com/"/>
      </div>
    </div>
  );
};

export default Skills;
