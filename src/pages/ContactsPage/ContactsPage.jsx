import css from "../ContactsPage/ContactsPage.module.css";

import {useEffect, useState } from "react";

import Section from "../../components/Section/Section";
import AddContact from "../../components/AddContact/AddContact";
import ContactList from "../../components/ContactList/ContactList";
import Modal from "../../components/Modal/Modal";

export default function ContactsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
			<AddContact isOpen={ openModal} />
			<ContactList />
			<Modal isOpen={modalIsOpen}
				onRequestClose={closeModal}
			/>
		</Section>
		
	)
}