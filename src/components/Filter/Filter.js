import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/contacts/contacts-actions';
import { Box, Typography, TextField } from "@mui/material";

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography component="h1" variant="h4">
        Contacts
      </Typography>
      <Box component="form"
        sx={{
          mt: 1,
          width:  "33%",
        }}>
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          type="text"
          label="Find contacts by name"
          name="name"
          value={filter}
          onChange={(e) => dispatch(actions.changeFilter(e.currentTarget.value))}
        />
      </Box>
    </Box>
  );
};
