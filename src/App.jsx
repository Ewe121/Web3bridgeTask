// src/App.js
import React, { useState } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

function App() {
    const [contacts, setContacts] = useState([]);
    const [currentContactIndex, setCurrentContactIndex] = useState(null);

    const handleAddOrUpdateContact = (contact) => {
        if (currentContactIndex !== null) {
            const updatedContacts = contacts.map((c, index) => index === currentContactIndex ? contact : c);
            setContacts(updatedContacts);
            setCurrentContactIndex(null);
        } else {
            setContacts([...contacts, contact]);
        }
    };

    const handleDeleteContact = (index) => {
        setContacts(contacts.filter((_, i) => i !== index));
    };

    const handleEditContact = (index) => {
        setCurrentContactIndex(index);
    };

    return (
        <div className="flex justify-items-center items-center container mx-auto p-4">
            <ContactForm
                onSubmit={handleAddOrUpdateContact}
                contactToEdit={currentContactIndex !== null ? contacts[currentContactIndex] : null}
            />
            <ContactList
                contacts={contacts}
                onDeleteContact={handleDeleteContact}
                onEditContact={handleEditContact}
            />
        </div>
    );
}

export default App;
