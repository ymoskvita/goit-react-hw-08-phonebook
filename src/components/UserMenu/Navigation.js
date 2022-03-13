import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import { Button } from "@mui/material";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return(
    <nav>
      <Button size="large" href="/" sx={{margin: 1}}>
        Home
      </Button>
      {isLoggedIn && <Button size="large" href="/contacts">
        Contacts
      </Button>}
    </nav>
  )
};

export default Navigation;
