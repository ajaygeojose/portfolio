import React from "react";
import "./sidepanel.css";
import SideComponent from "./sideComponent";
import { Link } from "@mui/material";
import { contentList, languages, references, resume, skills } from "../../constants/sidePanelData";

const Sidepanel = () => {
  contentList[1]= <Link href="https://maps.app.goo.gl/kjgjs4LGnpA8tsUX9" target="_blank" rel="noopener" underline="none">Liverpool, UK</Link>
  contentList[2]= <Link href="mailto:ajaygeojose@gmail.com" target="_blank" rel="noopener" underline="none">Mail</Link>
  contentList[3]= <Link href="https://www.linkedin.com/in/ajay-geo-jose-189438170/" target="_blank" rel="noopener" underline="none">LinkedIn</Link>
  const onButtonClick = () => {
    let alink = document.createElement("a");
    alink.href = resume.fileUrl; // Webpack will resolve the correct URL
    alink.download = resume.name; // Set the file name for download
    alink.click();
  };
  return (
    <div className="sidepanel">
      <SideComponent name="CONTACT" sideItemList={contentList} sideItemStyle={"disc"}/>
      <SideComponent name="PROFICIENCIES" sideItemList={skills} sideItemStyle={"disc"}/>
      <SideComponent name="LANGUAGES" sideItemList={languages} sideItemStyle={"disc"}/>
      <SideComponent name="REREFENCES" sideItemList={references} sideItemStyle={"none"}/>
      <SideComponent name="RESUME" sideItemList={resume} sideItemStyle={"none"} onButtonClick={onButtonClick}/>
    </div>
  );
};

export default Sidepanel;
