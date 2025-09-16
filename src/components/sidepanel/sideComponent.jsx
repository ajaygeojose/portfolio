import "./sidepanel.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button, Rating, Tooltip } from "@mui/material";
import { Link } from "@mui/material";

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
          {name == "CONTACT" ? (
            sideItemList.map(({ label, href, target }, index) => (
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
            ))
          ) : name == "REREFENCES" ? (
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
                    <Tooltip className="content" title={item.split(" ")[1]} placement="right">
                      <Button>{item.split(" ")[0]}</Button>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SideComponent;
