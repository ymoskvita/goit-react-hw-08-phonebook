import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import { Box, Avatar, Typography} from "@mui/material";


const HomeView = () => (
  <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <PhoneIphoneTwoToneIcon />
      </Avatar>
      <Typography component="h1" variant="h2">
        PhoneBook
    </Typography>
  </Box>
);

export default HomeView;
