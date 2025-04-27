import { useSelector } from "react-redux";
import Contact from "./Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map((c) => (
        <Contact key={c.id} {...c} />
      ))}
    </ul>
  );
};

export default ContactList;
