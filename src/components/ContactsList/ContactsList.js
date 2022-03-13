import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operation';
import { List, ListItem, ListItemText, IconButton, Box, ListItemAvatar, Avatar } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
  return visibleContacts;
};

export default function ContactsList() {
  const contacts = useSelector(state => getVisibleContacts(state.contacts.items, state.contacts.filter));
  const isLoading = useSelector(state => state.contacts.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {isLoading
        && <BallTriangle
              color="#000"
              height={50}
              width={50} />}
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}>
        {contacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            disableGutters
            secondaryAction={
              <IconButton onClick={() => dispatch(deleteContact(id))} >
                <DeleteOutlineIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={number}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
