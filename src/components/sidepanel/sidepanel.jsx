import React from "react";
import "./sidepanel.css";
import SideComponent from "./sideComponent";
import { contactItems, languages, references, resume, skills } from "../../constants/sidePanelData";

const Sidepanel = () => {
  const onButtonClick = () => {
    let alink = document.createElement("a");
    alink.href = resume.fileUrl; // Webpack will resolve the correct URL
    alink.download = resume.name; // Set the file name for download
    alink.click();
  };
  return (
    <div className="sidepanel">
      <SideComponent name="CONTACT" sideItemList={contactItems} sideItemStyle={"none"}/>
      <SideComponent name="PROFICIENCIES" sideItemList={skills} sideItemStyle={"none"}/>
      <SideComponent name="LANGUAGES" sideItemList={languages} sideItemStyle={"none"}/>
      <SideComponent name="REREFENCES" sideItemList={references} sideItemStyle={"none"}/>
      <SideComponent name="RESUME" sideItemList={resume} sideItemStyle={"none"} onButtonClick={onButtonClick}/>
    </div>
  );
};

export default Sidepanel;
