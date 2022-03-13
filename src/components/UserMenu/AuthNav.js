import { Button } from "@mui/material";

export default function AuthNav() {
  return (
    <div>
      <Button size="large" href="/register" sx={{margin: 1}}>
        Register
      </Button>
      <Button size="large" href="/login">
        Login
      </Button>
    </div>
  )
}
