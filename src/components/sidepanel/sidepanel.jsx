import React, { useEffect, useState } from "react";
import "./sidepanel.css";
import SideComponent from "./sideComponent";
import {
  contactItems,
  languages,
  references,
  resume,
  skills,
} from "../../constants/sidePanelData";

const Sidepanel = () => {
  const onButtonClick = () => {
    let alink = document.createElement("a");
    alink.href = resume.fileUrl; // Webpack will resolve the correct URL
    alink.download = resume.name; // Set the file name for download
    alink.click();
  };
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="sidepanel">
      <SideComponent
        name="CONTACT"
        sideItemList={contactItems}
        sideItemStyle={"none"}
        handleChange={handleChange}
        expanded={expanded === "CONTACT"}
      />
      <SideComponent
        name="PROFICIENCIES"
        sideItemList={skills}
        sideItemStyle={"none"}
        handleChange={handleChange}
        expanded={expanded === "PROFICIENCIES"}
      />
      <SideComponent
        name="LANGUAGES"
        sideItemList={languages}
        sideItemStyle={"none"}
        handleChange={handleChange}
        expanded={expanded === "LANGUAGES"}
      />
      <SideComponent
        name="REREFENCES"
        sideItemList={references}
        sideItemStyle={"none"}
        handleChange={handleChange}
        expanded={expanded === "REREFENCES"}
      />
      <SideComponent
        name="RESUME"
        sideItemList={resume}
        sideItemStyle={"none"}
        onButtonClick={onButtonClick}
        handleChange={handleChange}
        expanded={expanded === "RESUME"}
      />
    </div>
  );
};

export default Sidepanel;
