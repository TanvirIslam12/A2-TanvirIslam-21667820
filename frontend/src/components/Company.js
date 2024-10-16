import React, { useState } from 'react';

function Company({ company, companies, setCompanies, contact }) {
    const [isEditing, setIsEditing] = useState(false);
    const [companyData, setCompanyData] = useState({
        company_name: company.company_name,
        company_address: company.company_address
    });

    // Handle enabling edit mode
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Handle canceling edits
    const handleCancel = () => {
        setCompanyData({
            company_name: company.company_name,
            company_address: company.company_address
        });
        setIsEditing(false); // Exit edit mode without saving
    };

    // Handle form field change
    const handleChange = (e) => {
        setCompanyData({
            ...companyData,
            [e.target.name]: e.target.value
        });
    };

    // Handle update/save company
    const handleUpdate = () => {
        fetch(`/api/contacts/${contact.id}/companies/${company.company_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(companyData)
        })
        .then(() => {
            const updatedCompanies = companies.map(c =>
                c.company_id === company.company_id ? { ...company, ...companyData } : c
            );
            setCompanies(updatedCompanies);
            setIsEditing(false); // Exit edit mode after saving
        })
        .catch(err => console.error(err));
    };

    // Handle delete company
    const handleDelete = () => {
        fetch(`/api/contacts/${contact.id}/companies/${company.company_id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setCompanies(companies.filter(c => c.company_id !== company.company_id)); // Remove from list
        })
        .catch(err => console.error(err));
    };

    return (
        <tr>
            {/* Company Name Field */}
            <td>
                {isEditing ? (
                    <input
                        type='text'
                        name='company_name'
                        value={companyData.company_name}
                        onChange={handleChange}
                    />
                ) : (
                    company.company_name
                )}
            </td>
            
            {/* Company Address Field */}
            <td>
                {isEditing ? (
                    <input
                        type='text'
                        name='company_address'
                        value={companyData.company_address}
                        onChange={handleChange}
                    />
                ) : (
                    company.company_address
                )}
            </td>
            
            {/* Actions: Edit, Save, Cancel, and Delete */}
            <td>
                {isEditing ? (
                    <>
                        <button onClick={handleUpdate} className="button green">Save</button>
                        <button onClick={handleCancel} className="button blue">Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleEdit} className="button green">Edit</button>
                        <button onClick={handleDelete} className="button red">Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
}

export default Company;
