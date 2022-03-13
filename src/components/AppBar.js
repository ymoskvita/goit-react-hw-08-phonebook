import { useSelector } from "react-redux";
import AppBarStyled from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import authSelectors from "redux/auth/auth-selectors";
import AuthNav from "./UserMenu/AuthNav";
import Navigation from "./UserMenu/Navigation";
import UserMenu from "./UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBarStyled
      position="static"
      color="default"
      elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-around'}}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav /> }
      </Toolbar>
    </AppBarStyled>
  )
}
