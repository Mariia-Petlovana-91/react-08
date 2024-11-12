import css from './ContactList.module.css';
import clsx from 'clsx';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

import { selectFilteredContacts} from "../../redux/contacts/selectors";

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
  
    return (
        <ul className={clsx("block",css.contact__list)}>
            {Array.isArray(filteredContacts)&& filteredContacts.map((ar) => (
                <li className={css.contact__item} key={ar.id}>
                    <Contact
                        name={ar.name}
                        number={ar.number}
                        id={ar.id}
                    />
                </li>
            ))}
        </ul>
    );
}
