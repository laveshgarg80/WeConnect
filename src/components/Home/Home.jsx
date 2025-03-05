import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider
} from '@mui/material';
import {
  Home as HomeIcon,
  Message,
  Event,
  Group,
  Person,
  Add as AddIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedNav, setSelectedNav] = useState('home');
  const navigate = useNavigate();

  const navigationItems = [
    { icon: <HomeIcon />, label: 'Home', value: 'home', path: '/home' },
    { icon: <Message />, label: 'Messaging', value: 'messaging', path: '/messaging' },
    { icon: <Event />, label: 'Events', value: 'events', path: '/events' },
    { icon: <Group />, label: 'Channels', value: 'channels', path: '/channels' },
    { icon: <Person />, label: 'Profile', value: 'profile', path: '/profile' }
  ];

  const feedItems = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Just published a new article on AI trends in 2024!',
      timestamp: '2h ago'
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Looking for software engineers to join our growing team.',
      timestamp: '4h ago'
    }
  ];

  const recommendedConnections = [
    {
      id: 1,
      name: 'Alice Johnson',
      title: 'Senior Developer at Tech Co',
      mutualConnections: 12
    },
    {
      id: 2,
      name: 'Bob Wilson',
      title: 'Product Manager at Innovation Inc',
      mutualConnections: 8
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Professional Network
          </Typography>
          {navigationItems.map((item) => (
            <IconButton
              key={item.value}
              color={selectedNav === item.value ? 'secondary' : 'inherit'}
              onClick={() => {
                setSelectedNav(item.value);
                navigate(item.path);
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacing for fixed AppBar */}
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Main Feed */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 2 }}>
              <Paper sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  fullWidth
                >
                  Create Post
                </Button>
              </Paper>
            </Box>
            
            {feedItems.map((item) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.timestamp}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {item.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Comment</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>

          {/* Recommended Connections */}
          <Grid item xs={12} md={4}>
            <Paper>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Recommended Connections
                </Typography>
                <List>
                  {recommendedConnections.map((connection) => (
                    <>
                      <ListItem key={connection.id}>
                        <ListItemAvatar>
                          <Avatar>{connection.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={connection.name}
                          secondary={
                            <>
                              {connection.title}
                              <br />
                              {connection.mutualConnections} mutual connections
                            </>
                          }
                        />
                        <Button variant="outlined" size="small">
                          Connect
                        </Button>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  ))}
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;