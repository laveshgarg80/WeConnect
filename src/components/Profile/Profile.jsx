import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Box,
  Chip,
  LinearProgress,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  School,
  PlayCircleOutline,
  WorkspacePremium,
  Star
} from '@mui/icons-material';

const Profile = () => {
  const [userProfile] = useState({
    name: 'John Doe',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc',
    skills: [
      { name: 'React', level: 'Expert', endorsements: 25 },
      { name: 'Node.js', level: 'Advanced', endorsements: 18 },
      { name: 'Python', level: 'Intermediate', endorsements: 12 },
      { name: 'AWS', level: 'Advanced', endorsements: 15 },
      { name: 'Docker', level: 'Intermediate', endorsements: 10 }
    ],
    learningProgress: {
      videosWatched: 45,
      totalVideos: 60,
      certificatesCompleted: [
        {
          name: 'Advanced React Development',
          issuer: 'React Academy',
          date: '2024-01-15',
          score: 95
        },
        {
          name: 'Cloud Architecture Fundamentals',
          issuer: 'AWS Training',
          date: '2023-12-20',
          score: 88
        }
      ]
    }
  });

  const getSkillColor = (level) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return '#2E7D32';
      case 'advanced':
        return '#1976D2';
      case 'intermediate':
        return '#ED6C02';
      default:
        return '#757575';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar
              sx={{ width: 100, height: 100, fontSize: '3rem' }}
            >
              {userProfile.name[0]}
            </Avatar>
            <Box>
              <Typography variant="h4">{userProfile.name}</Typography>
              <Typography variant="h6" color="text.secondary">
                {userProfile.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {userProfile.company}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Professional Skills
            </Typography>
            <Grid container spacing={1}>
              {userProfile.skills.map((skill) => (
                <Grid item key={skill.name}>
                  <Chip
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {skill.name}
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>
                          · {skill.endorsements} endorsements
                        </Typography>
                      </Box>
                    }
                    sx={{
                      bgcolor: getSkillColor(skill.level),
                      color: 'white',
                      '& .MuiChip-label': { px: 2 }
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Learning Progress */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Learning Progress
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">
                  Video Lectures Completed
                </Typography>
                <Typography variant="body2" color="primary">
                  {userProfile.learningProgress.videosWatched} /{' '}
                  {userProfile.learningProgress.totalVideos}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  (userProfile.learningProgress.videosWatched /
                    userProfile.learningProgress.totalVideos) *
                  100
                }
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Certificates Earned
              </Typography>
              {userProfile.learningProgress.certificatesCompleted.map((cert, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">{cert.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.issuer}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 1
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        Completed: {new Date(cert.date).toLocaleDateString()}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: cert.score >= 90 ? 'success.main' : 'primary.main' }}
                      >
                        Score: {cert.score}%
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;