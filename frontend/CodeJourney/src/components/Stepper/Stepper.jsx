import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DataObjectIcon from "@mui/icons-material/DataObject";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyIcon from "@mui/icons-material/Key";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useLocation } from "react-router-dom";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#ffffff",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#fd0404",
    zIndex: 1,
    fontSize: 38,
  },
  "& .QontoStepIcon-circle": {
    width: 28,
    height: 28,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(121deg, rgba(17,252,17,1) 30%, rgba(84,87,252,1) 84%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(121deg, rgba(68,17,252,1) 30%, rgba(252,84,84,1) 84%",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  fontSize: "20px",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.gray[700] : "#ccc",
  zIndex: 1,
  color: "#0b00d2",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(90deg,rgba(65, 72, 255, 0.5) 0.96%,#0cffab 54.77%,#8000ff 102.59%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(121deg, rgba(68,17,252,1) 30%, #d554fc 84%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <KeyIcon />,
    3: <DataObjectIcon />,
    4: <RocketLaunchIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ["Registro", "Login", "Elige tus rutas", "Comenzar"];

export default function CustomizedSteppers({ showLogin }) {
  const location = useLocation();
  const pathname = location.pathname;

  let activeStep;

  if (pathname === "/registro" && !showLogin) {
    activeStep = 0;
  } else if (pathname === "/registro" && showLogin) {
    activeStep = 1;
  } else if (pathname === "/welcome") {
    activeStep = 3;
  }

  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </>
  );
}
