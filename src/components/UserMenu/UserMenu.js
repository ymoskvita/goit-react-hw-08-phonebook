import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-operation";
import { Avatar, IconButton, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div style={{ display: 'flex', alignItems: 'center',}}>
      <Avatar sx={{margin: 1}}/>
      <Typography>{email}</Typography>
      <IconButton color="info" aria-label="logout" size="small" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </div>
  )
};
