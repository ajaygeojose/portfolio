import React, { useState } from "react";
import "./contentpanel.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { EDUCATION, EXPERIENCE, keywords, PROFILE, PROJECTS } from "../../constants/contentPanelData";
const ContentPanel = () => {
  const [experience, setexperience] = useState(EXPERIENCE);

  const education = EDUCATION;

  const [projects, setProjects] = useState(PROJECTS);

  // const showToggle = (list, setList, item, index) => {
  //   let exp = list.filter((filterItem) => filterItem.company === item.company);
  //   exp.show = !exp.show;
  //   setList(
  //     list.map((exp, i) => (i === index ? { ...exp, show: !exp.show } : exp))
  //   );
  // };
// function highlightText(text, keywords) {
//   let temp="";
//  keywords.forEach(element => {
//   temp+=text.split(element)[0]+(`<strong>${element}</strong>`)+text.split(element)[0];
//  });
//  console.log(">>>",temp);
//   // const regex = new RegExp(`(${keywords.join("|")})`, "gi");

//   // return text.split(regex).map((part, i) =>
//   //   keywords.some(k => k.toLowerCase() === part?.toLowerCase())
//   //     ? <strong key={i}>{part}</strong>
//   //     : part
//   // );
//   return temp
// }

function highlightText(text, keywords) {
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text.split(regex).map((part, i) =>
    keywords.some(k => k.toLowerCase() === part?.toLowerCase())
      ? <strong key={i}>{part}</strong>
      : part
  );
}
  return (
    <div className="contentpanel">
      <div id="profile" style={{ display: "flex" }}>
        {/* <p
          style={{
            backgroundColor: "#323B4C",
            heigth: "5rem",
            width: "5rem",
            borderRadius: "0.6rem",
            margin: "1rem",
          }}
        ></p> */}
        <div>
          <h3>Profile</h3>
          <hr className="hr" />
          {/* <span className="content">
           {PROFILE}
          </span> */}
          <p className="content">
            {/* {PROFILE} */}
             {highlightText(PROFILE, keywords)}
          </p>
        </div>
      </div>
      <div id="Work Experience">
        <h3>Work Experience</h3>
        <hr className="hr" />
        {experience.map((item, index) => (
          <div key={index * 2} style={{padding:"0.8rem"}}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  {" "}
                  {item.role} : {item.period}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                  {item.details.map((data, index2) => (
                    <li style={{ fontSize: "0.8rem" }} key={index * 8}>
                      {data}
                    </li>
                  ))}
                </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>

{/* <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        src="https://maps.app.goo.gl/kjgjs4LGnpA8tsUX9"
      /> */}

      <div id="Education">
        <h3>Education</h3>
        <hr className="hr" />
        {education.map((item, index) => (
          <div key={index * 2} style={{paddingLeft:"0.5rem"}}>
            <h4>{item.level}</h4>
            <p style={{ fontSize: "0.8rem" }}>{item.period}</p>
          </div>
        ))}
      </div>

      <div id="projects">
        <h3>Projects</h3>
        <hr className="hr" />
        {projects.map((item, index) => (
          <div key={index * 2} style={{padding:"0.5rem"}}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  {" "}
                  {item.name} - {item.company} : {item.period}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    {item.details.map((data, index2) => (
                      <li style={{ fontSize: "0.8rem", listStyleType:"none" }} key={index2 * 8}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentPanel;
