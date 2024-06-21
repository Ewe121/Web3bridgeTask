// src/components/ContactList.js
import React from 'react';

function ContactList({ contacts, onDeleteContact, onEditContact }) {
    const handleDeleteClick = (index) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            onDeleteContact(index);
        }
    };

    const handleEditClick = (index) => {
        onEditContact(index);
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            {contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        {contact.profilePic && <img src={URL.createObjectURL(contact.profilePic)} alt={`${contact.firstName} ${contact.lastName}`} className="w-12 h-12 rounded-full" />}
                        <div>
                            <p className="text-xl font-semibold">{contact.firstName} {contact.lastName}</p>
                            <p className="text-sm text-gray-600">Age: {contact.age}</p>
                            <p className="text-sm text-gray-600">Email: {contact.email}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleEditClick(index)} className="mr-2 text-blue-500 hover:text-blue-600 transition duration-200">Edit</button>
                        <button onClick={() => handleDeleteClick(index)} className="text-red-500 hover:text-red-600 transition duration-200">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactList;
