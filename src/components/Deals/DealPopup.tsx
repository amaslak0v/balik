import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Deal } from '../../data/dataModels';

interface DealPopupProps {
  deal: Deal;
  onClose: () => void;
}

const dealPopupStyles = {
  card: {
    maxWidth: 300,
    margin: 'auto',
  },
  media: {
    height: 200,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    color: '#888', // Use your desired color
  },
};

const DealPopup: React.FC<DealPopupProps> = ({ deal, onClose }) => {
  return (
    <Card style={dealPopupStyles.card}>
      <CardMedia style={dealPopupStyles.media} image={deal.photoUrl} title={deal.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {deal.name}
        </Typography>
        <Typography variant="subtitle1">{deal.price}</Typography>
        <Typography variant="body2" color="textSecondary">
          {deal.description}
        </Typography>
      </CardContent>
      {/* You can add a close button here to trigger the onClose callback */}
    </Card>
  );
};

export default DealPopup;
