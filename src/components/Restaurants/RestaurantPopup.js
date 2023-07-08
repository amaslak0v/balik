import React from 'react';
import { Dialog, IconButton, Slide, Box, Typography, Button, Fade } from '@mui/material';
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade in={true} ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: auto;
    overflow: auto;
    borderRadius: 22px;
    backgroundColor: #f5f5f5;
    position: relative;
    border: 1px solid #000;
    box-shadow: none;
    margin: auto;
  }
  .MuiIconButton-root {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #000;
    padding: 5px;
    &:hover {
      backgroundColor: rgba(0, 0, 0, 0.1);
    }
  }
  .MuiButton-root {
    color: #3f51b5;
    border-color: #3f51b5;
  }
`;

const StyledBox = styled(Box)`
  padding: 2rem;
  border-top: 1px solid black; // Black divider line - thicker
`;

const StyledCarousel = styled(Carousel)`
  border-bottom: 2px solid black;
`;

const RestaurantDetails = ({ restaurant, onClose }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <StyledDialog
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
      <StyledCarousel>
        {restaurant.images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`${restaurant.name} ${i}`}
            style={{ 
              display: "block", 
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              objectFit: "contain"
             }}
          />
        ))}
      </StyledCarousel>
      <StyledBox>
        <Typography variant="h6" gutterBottom>
          {restaurant.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {restaurant.description}
        </Typography>
        <Button variant="outlined" href={restaurant.google_map} target="_blank" fullWidth>
          Go to Google Maps
        </Button>
      </StyledBox>
    </StyledDialog>
  );
};

export default RestaurantDetails;
