import React from "react";
import { Marker } from "react-map-gl";
import { Deal, Location } from "../../data/dataModels"; 
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface DealMarkerProps {
  deal: Deal;
  location: Location;
  onClick: () => void;
}

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: '100px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textAlign: 'center',
}));

const DealMarker: React.FC<DealMarkerProps> = ({ deal, location, onClick }) => {
  console.log("> {deal}" + deal)
  const {
    shortDescription: dealShortDescription,
    marker: dealMarker,
  } = deal;

  const { latitude, longitude } = location; 

  return (
    <Marker longitude={longitude} latitude={latitude} anchor="bottom">
      <StyledBox onClick={onClick}>
        <Tooltip title={dealShortDescription} arrow>
          <StyledAvatar alt={dealShortDescription}>{dealMarker}</StyledAvatar>
        </Tooltip>
        <StyledTypography variant="caption">{dealShortDescription}</StyledTypography>
      </StyledBox>
    </Marker>
  );
};

export default DealMarker;
