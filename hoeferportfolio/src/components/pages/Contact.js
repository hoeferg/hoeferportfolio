import React, { useState } from 'react';
import './style.css';

function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'firstName' ? setFirstName(value) : setLastName(value) 

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        alert(`Your message has been submitted`);

        if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
    };
};

return (
    <div>
        <p>
            Input your message and we'll contact you soon!
        </p>
        <form className="form">
            <input //controlled element
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First Name"
            />
            <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>
    </div>
);
}

export default Form;
