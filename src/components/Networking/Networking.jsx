import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Box,
  Chip,
  Rating,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import { Message, PersonAdd } from '@mui/icons-material';

const Networking = () => {
  const [connections] = useState([
    {
      id: 1,
      name: 'Sarah Parker',
      title: 'UX Designer at Design Co',
      compatibility: 95,
      interests: ['UI/UX', 'Product Design', 'User Research'],
      mutualConnections: 15
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Software Architect at Tech Solutions',
      compatibility: 88,
      interests: ['Cloud Architecture', 'Microservices', 'DevOps'],
      mutualConnections: 10
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Product Manager at Innovation Labs',
      compatibility: 82,
      interests: ['Agile', 'Product Strategy', 'Market Research'],
      mutualConnections: 8
    }
  ]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Grow Your Network
      </Typography>
      <Grid container spacing={3}>
        {connections.map((connection) => (
          <Grid item xs={12} md={4} key={connection.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{ width: 64, height: 64, mr: 2 }}
                  >
                    {connection.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">
                      {connection.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {connection.title}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Professional Compatibility
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating
                      value={connection.compatibility / 20}
                      readOnly
                      precision={0.5}
                    />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {connection.compatibility}%
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Mutual Interests
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {connection.interests.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {connection.mutualConnections} mutual connections
                </Typography>

                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    startIcon={<PersonAdd />}
                    fullWidth
                  >
                    Connect
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Message />}
                    fullWidth
                  >
                    Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Networking;