import { Toaster } from 'react-hot-toast';
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";

export default function ContactsView() {
  return (
    <>
      <Toaster />
      <Form />
      <Filter />
      <ContactsList />
    </>
  )
};
