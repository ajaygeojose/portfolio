import React, { useEffect, useState } from "react";
import "./contentpanel.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  EDUCATION,
  EXPERIENCE,
  keywords,
  PROFILE,
  PROJECTS,
} from "../../constants/contentPanelData";
const ContentPanel = () => {
  const [experience, setexperience] = useState(EXPERIENCE);

  const education = EDUCATION;

  const [projects, setProjects] = useState(PROJECTS);
  useEffect(() => {
    const profileText = document.getElementById("profileText");
    profileText.innerHTML = highlightText(PROFILE, keywords);
  }, []);

  // Escape regex special chars in keywords
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Highlight keywords in PROFILE
  function highlightText(text, words) {
    let result = text;
    words.forEach((word) => {
      const regex = new RegExp(escapeRegex(word), "g");
      result = result.replace(regex, `<strong>${word}</strong>`);
    });
    return result;
  }

  function IconRenderer({ icon }) {
    const IconComponent = icon;
    return IconComponent ? <IconComponent /> : null;
  }
  return (
    <div className="contentpanel">
      <div id="profile" style={{ display: "flex" }}>
        <div>
          <h3>Profile</h3>
          <hr className="hr" />
          <p className="content" id="profileText"></p>
        </div>
      </div>
      <div id="Work Experience">
        <h3>Work Experience</h3>
        <hr className="hr" />
        {experience.map((item, index) => (
          <div key={index * 2} style={{ padding: "0.25rem" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  component="span"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {item.role} : {item.period}
                  <a href={item.url} target="_blank">
                    <img
                    style={{ height: "1.5rem", maxWidth: "7rem" }}
                    src={item.logo}
                  />
                  </a>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="content">
                  {item.details.map((data, index2) => (
                    <li key={index2 * 8}>{data}</li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>

      <div id="Education">
        <h3>Education</h3>
        <hr className="hr" />
        {education.map((item, index) => (
          <div key={index * 2} style={{ paddingLeft: "0.5rem" }}>
            <h4>{item.level}</h4>
            <p className="content">{item.period}</p>
          </div>
        ))}
      </div>

      <div id="projects">
        <h3>Projects</h3>
        <hr className="hr" />
        {projects.map((item, index) => (
          <div key={index * 2} style={{ padding: "0.25rem" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  component="span"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {" "}
                  {item.name} - {item.company} : {item.period}
                  <a href={item.url} target="_blank">
                    <IconRenderer icon={item.logo} />
                  </a>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="content">
                  {item.details.map((data, index2) => (
                    <li style={{ listStyleType: "none" }} key={index2 * 8}>
                      {data}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentPanel;
