import Contact from './Contact.js';
import NewContact from './NewContact.js';

function ContactList({ contacts, setContacts, setSelectedContactId }) {

	return (
		<div className='contact-list'>
            <h2>Contacts</h2>

            <NewContact contacts={contacts} setContacts={setContacts} />

            <hr />

            {contacts.map(contact => (
                <Contact 
                    key={contact.id} 
                    contact={contact} 
                    contacts={contacts}
                    setContacts={setContacts}
                    setSelectedContractId= {setSelectedContactId}
                />
            ))}
        </div>
	);
}

export default ContactList;
