import React from "react";
import "./sidepanel.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button, Rating } from "@mui/material";

const SideComponent = ({
  name,
  sideItemList,
  sideItemStyle,
  onButtonClick,
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {name == "REREFENCES" ? (
            sideItemList.map((item) => (
              <div>
                <h4>{item.name}</h4>
                <p>{item.company}</p>
                <p>Email: {item.mail}</p>
              </div>
            ))
          ) : name == "RESUME" ? (
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={onButtonClick}
              >
                {sideItemList.type}
              </Button>
            </div>
          ) : (
            <ul
              style={{ listStyleType: sideItemStyle ? sideItemStyle : "none" }}
            >
              {sideItemList.map((item) => (
                <li key={item}>
                  {name === "PROFICIENCIES" ? (
                    <>
                      <Typography component="legend">{item.name}</Typography>
                      <Rating
                        name="simple-controlled"
                        value={item.rate}
                        onChange={(event, newValue) => {
                          // setValue(newValue);
                        }}
                      />
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>

    // <div id="name" className='content'>
    //     <h3>{name}</h3>
    //     <hr className="hr" />
    // {(name=="REREFENCES")?sideItemList.map(item=><div>
    //     <h4>{item.name}</h4>
    //     <p>{item.company}</p>
    //     <p>Email: {item.mail}</p>

    // </div>):<ul style={{listStyleType:sideItemStyle?sideItemStyle:"none"}}>
    //   {sideItemList.map(item=><li key={item} style={{paddingBottom:"3px"}}>{item}</li>)}
    // </ul>}

    // </div>
  );
};

export default SideComponent;
