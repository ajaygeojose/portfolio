import "./sidepanel.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button, Rating, Tooltip } from "@mui/material";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
const SideComponent = ({
  name,
  sideItemList,
  sideItemStyle,
  onButtonClick,
  expanded,
  handleChange,
  isMobile,
}) => {
  return (
    <Accordion expanded={expanded} onChange={handleChange(name)}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
          {name == "CONTACT" ? (
            <>
              {isMobile ? (
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <InfoOutlineIcon /> <h6>click links to know more..</h6>
                </span>
              ) : (
                <Tooltip
                  style={{ float: "right" }}
                  title="click links to know more.."
                  placement="left"
                >
                  <InfoOutlineIcon />
                </Tooltip>
              )}
              {sideItemList.map(({ label, href, target }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={target}
                  rel="noopener"
                  underline="none"
                  sx={{ display: "block", mb: 1 }} // optional styling
                >
                  {label}
                </Link>
              ))}
            </>
          ) : name == "REREFENCES" ? (
            sideItemList.map((item, index) => (
                <div key={index} className="content">
                  <h5>{item.name}</h5>
                  <span>{item.company}</span>
                  {!isMobile ? (
                    <>
                      <p>
                        Email: <a href={`mailto:${item.mail}`}>{item.href}</a>
                      </p>
                      <p>
                        LinkedIn:{" "}
                        <a href={`mailto:${item.mail}`}>{item.linkHref}</a>
                      </p>
                    </>
                  ) : (
                    <div style={{display:"flex", flexDirection:"row", gap:"8px"}}>
                      <Link
                        key={index}
                        href={item.href}
                        target={item.target}
                        rel="noopener"
                        underline="none"
                        sx={{ display: "block", mb: 1 }} // optional styling
                      >
                        Email
                      </Link>
                      /
                      <Link
                        key={index}
                        href={item.LinkHref}
                        target={item.target}
                        rel="noopener"
                        underline="none"
                        sx={{ display: "block", mb: 1 }} // optional styling
                      >
                        LinkedIn
                      </Link>
                    </div>
                  )}
                  <hr />
                </div>
            ))
          ) : name == "RESUME" ? (
            <div>
              <Button
                variant="contained"
                onClick={onButtonClick}
                style={{
                  borderRadius: 35,
                  backgroundColor: "#323b4c",
                }}
              >
                {sideItemList.type}
              </Button>
            </div>
          ) : (
            <ul
              style={{ listStyleType: sideItemStyle ? sideItemStyle : "none" }}
            >
              {sideItemList.map((item, index) => (
                <li key={index}>
                  {name === "PROFICIENCIES" ? (
                    <>
                      <Typography component="legend">{item.name}</Typography>
                      <Rating
                        name="simple-controlled"
                        value={item.rate}
                        onChange={(event, newValue) => {
                          // setValue(newValue);
                        }}
                        readOnly
                      />
                    </>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{item.name}</span>
                      <Rating
                        name="simple-controlled"
                        value={item.rate}
                        readOnly
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
      </AccordionDetails>
    </Accordion>
  );
};

export default SideComponent;
