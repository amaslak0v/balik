import React from "react";
import { Marker } from "react-map-gl";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

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

function RestaurantMarker({ restaurant, onClick }) {
  const {
    name,
    location: { _long, _lat },
    marker,
  } = restaurant;

  return (
    <Marker longitude={_long} latitude={_lat} anchor="bottom">
      <StyledBox onClick={onClick}>
        <Tooltip title={name} arrow>
          <StyledAvatar alt={name}>{marker}</StyledAvatar>
        </Tooltip>
        <StyledTypography variant="caption">{name}</StyledTypography>
      </StyledBox>
    </Marker>
  );
}

export default RestaurantMarker;
