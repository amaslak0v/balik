import React from 'react';
import {
  Dialog,
  IconButton,
  Slide,
  Box,
  Typography,
  Chip,
  AppBar,
  Toolbar,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel'; // Please install this package

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RestaurantDetails = ({ restaurant, onClose }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <Dialog
      fullScreen
      open={Boolean(restaurant)}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          maxHeight: "80vh",
          maxWidth: "50vh",
          overflow: "auto",
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
        },
      }}
    >
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
            {restaurant.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
        <Carousel>
          {restaurant.images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`${restaurant.name} ${i}`}
              style={{ width: "100%", height: "30vh", objectFit: "fill" }}
            />
          ))}
        </Carousel>
        <Typography variant="h6" sx={{ my: 2 }}>
          {restaurant.description}
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", mb: "1rem" }}
        >
        </Box>
        <Button variant="outlined" href={restaurant.google_map} target="_blank" style={{ color: "#3f51b5", marginBottom: '1rem' }}>
          Go to Google Maps
        </Button>
      </Box>
    </Dialog>
  );
};

export default RestaurantDetails;
