import css from "../ContactsPage/ContactsPage.module.css";
import clsx from "clsx";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Section from "../../components/Section/Section";
import AddContact from "../../components/AddContact/AddContact";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import NotFound from "../../components/NotFound/NotFound";
import Modal from "../../components/Modal/Modal";

import {apiGetContacts} from "../../redux/contacts/slice";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isContacts = useSelector(selectFilteredContacts);

    useEffect(() => {
      dispatch(apiGetContacts());
  }, [dispatch]);

  function openModal() {
      setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
  if (modalIsOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  };
  }, [modalIsOpen]);

	return (
    <Section>
      <div className={clsx("block", css.containerEl)}>
      <SearchBox/>
      <AddContact isOpen={openModal} />  
      </div>
      {
        Array.isArray(isContacts) && isContacts.length !==0 ? <ContactList /> : <NotFound string={"No contacts."}/>
      }
			<Modal isOpen={modalIsOpen}
				onRequestClose={closeModal}
			/>
		</Section>
		
	)
}