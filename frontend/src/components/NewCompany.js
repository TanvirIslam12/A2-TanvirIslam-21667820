import React, { useState } from 'react';

function NewCompany({ contactId, setCompanies }) {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');

    // Async function to handle company creation
    async function createCompany(e) {
        e.preventDefault();

        try {
            if (!contactId) {
                throw new Error("Contact ID is missing");
            }

            const response = await fetch(`/api/contacts/${contactId}/companies`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    company_name: companyName,
                    company_address: companyAddress
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Added company:', data);

            if (!data.id) {
                throw new Error('Response data is missing an id property');
            }

            // Update the companies state
            setCompanies(prev => [...prev, data]);

            // Reset the input fields
            setCompanyName('');
            setCompanyAddress('');
        } catch (err) {
            console.error('Error adding company:', err);
        }
    }

    return (
        <form onSubmit={createCompany} className='new-company'>
            <input
                type='text'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
            />
            <input
                type='text'
                placeholder='Company Address'
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                required
            />
            <button type='submit'>Add Company</button>
        </form>
    );
}

export default NewCompany;
