import React from "react";
import { Marker } from "react-map-gl";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

const glowingAnimation = keyframes`
  0% { box-shadow: 0 0 5px #3be8f5, 2px 2px 10px ##3be8f5, -2px -2px 10px #3be8f5; }
  50% { box-shadow: 0 0 20px #3be8f5, 2px 2px 15px #3be8f5, -2px -2px 15px #3be8f5; }
  100% { box-shadow: 0 0 5px #3be8f5, 2px 2px 10px #3be8f5, -2px -2px 10px #3be8f5; }
`;

const GlowingAvatar = styled(Avatar)(({ theme }) => ({
  animation: `${glowingAnimation} 3s infinite`,
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(4px)",
}));

function RestaurantMarker({ restaurant, onClick }) {
  const {
    name,
    location: { _long, _lat },
    marker,
  } = restaurant;

  return (
    <Marker longitude={_long} latitude={_lat} anchor="center">
      <Box onClick={onClick} sx={{ cursor: "pointer", textAlign: "center" }}>
        <Tooltip title={name} arrow>
          <GlowingAvatar alt={name}>{marker}</GlowingAvatar>
        </Tooltip>
        <Typography variant="caption" align="center">
          {name}
        </Typography>
      </Box>
    </Marker>
  );
}

export default RestaurantMarker;
