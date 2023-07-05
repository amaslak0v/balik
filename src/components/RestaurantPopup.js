import React from 'react';
import { Dialog, IconButton, Slide, Box, Typography, Button } from '@mui/material';
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-height: 80vh;
    max-width: 90vw;
    overflow: auto;
    borderTopLeftRadius: 22px;
    borderTopRightRadius: 22px;
    backgroundColor: #f5f5f5;
    position: relative;
  }
  .MuiIconButton-root {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .MuiButton-root {
    color: #3f51b5;
    border-color: #3f51b5;
  }
`;

const RestaurantDetails = ({ restaurant, onClose }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <StyledDialog
      fullScreen
      open={Boolean(restaurant)}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <IconButton
        edge="start"
        color="inherit"
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Carousel>
        {restaurant.images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`${restaurant.name} ${i}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ))}
      </Carousel>
      <Box sx={{ padding: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          {restaurant.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {restaurant.description}
        </Typography>
        <Button variant="outlined" href={restaurant.google_map} target="_blank" fullWidth>
          Go to Google Maps
        </Button>
      </Box>
    </StyledDialog>
  );
};

export default RestaurantDetails;
