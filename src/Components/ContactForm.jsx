// src/components/ContactForm.js
import React, { useState, useEffect } from 'react';

function ContactForm({ onSubmit, contactToEdit }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        if (contactToEdit) {
            setFirstName(contactToEdit.firstName);
            setLastName(contactToEdit.lastName);
            setAge(contactToEdit.age);
            setEmail(contactToEdit.email);
            setPassword(contactToEdit.password); // Include this if you want to edit the password
            setProfilePic(contactToEdit.profilePic); // Ensure this works for both new and existing pics
        } else {
            setFirstName('');
            setLastName('');
            setAge('');
            setEmail('');
            setPassword('');
            setProfilePic(null);
        }
    }, [contactToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            firstName,
            lastName,
            age,
            email,
            password,
            profilePic
        });
        setFirstName('');
        setLastName('');
        setAge('');
        setEmail('');
        setPassword('');
        setProfilePic(null);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md space-y-4">
            <h2 className="text-3xl font-semibold text-center mb-6">{contactToEdit ? 'Update Contact' : 'Add Contact'}</h2>
            <div className="space-y-2">
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={!contactToEdit}
                />
                <input
                    type="file"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    accept="image/*"
                />
            </div>
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                {contactToEdit ? 'Update Contact' : 'Add Contact'}
            </button>
        </form>
    );
}

export default ContactForm;
