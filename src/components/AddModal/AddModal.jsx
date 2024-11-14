import css from './AddModal.module.css';
import clsx from 'clsx';

import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
Modal.setAppElement('#root');
import ContactForm from '../ContactForm/ContactForm';

import iconSize from '../../utils/iconSize';

export default function AddModal({ isOpen,
  onRequestClose }) {
  return (<>
    <Modal
      ariaHideApp={false}
      className={clsx(css.modal)}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Contacts"
      overlayClassName={css.modalOverlay}
    ><div className={clsx("block", css.modalCloseEl)}>
        <button
          type='button'
          onClick={onRequestClose}
          className={css.modalCloseBtn}
        >
          <IoCloseSharp className={css.icon}
            size={iconSize.m}
          />
        </button>
        <ContactForm setModalIsOpen={onRequestClose} />
      </div>
    </Modal>
  </>
  );
};
