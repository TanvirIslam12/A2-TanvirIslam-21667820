import { useState, useEffect } from 'react';  // import useEffect
import ContactList from './components/ContactList';
import Stats from './components/Stats';
import CompanyList from './components/CompanyList';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(null);

    useEffect(() => {
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedContactId) {
            fetch(`http://localhost/api/contacts/${selectedContactId}/companies`)
                .then(response => response.json())
                .then(data => setCompanies(data))
                .catch((error) => {
                    console.error('Error fetching companies:', error);
                });
        }
    }, [selectedContactId]);

    return (
        <div className='App'>
            <h1>Contact and Company Manager</h1>
            <ContactList 
                contacts={contacts} 
                setContacts={setContacts} 
                setSelectedContactId={setSelectedContactId}
                selectedContactId={selectedContactId}
                />
            <p>Click a contact to view associated phone numbers</p>

            {selectedContactId && (
                <CompanyList 
                    companies={companies} 
                    setCompanies={setCompanies} 
                    contactId={selectedContactId}
                />
            )}
            <Stats />
        </div>
    );
}

export default App;