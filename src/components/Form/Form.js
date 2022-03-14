import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { addContact } from '../../redux/contacts/contacts-operation';
import { Box, Typography, TextField, Button } from "@mui/material";


export default function Form() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact =>
      contact.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))) {
      setName('');
      setNumber('');
      return toast.error(`${name} is already in contacts.`)
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography component="h1" variant="h4">
        PhoneBook
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "33%",
        }}>
        <TextField
          margin="normal"
          fullWidth
          required
          id={nameInputId}
          type="text"
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          id={numberInputId}
          type="tel"
          label="Number"
          name="number"
          value={number}
          onChange={handleChange}
          // inputProps={{
          //   pattern: "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}",
          // title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}
        />
        <Button type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>
  )
};
