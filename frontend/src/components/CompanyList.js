import { useState, useEffect } from 'react';
import NewCompany from './NewCompany'; 
import Company from './Company';


function CompanyList({ contactId }) {
    const [companies, setCompanies] = useState([]); 
    const [showNewCompany, setShowNewCompany] = useState(false); 

    useEffect(() => {
        if (contactId) { 
            fetch(`/api/contacts/${contactId}/companies`)
                .then(res => res.json())
                .then(data => setCompanies(data)) 
                .catch(err => console.error(err));
        }
    }, [contactId]);

    
    const toggleNewCompany = () => {
        setShowNewCompany(!showNewCompany);
    };

    return (
        <div className='company-list'>
            <h2>Companies</h2>
            <button 
                onClick={toggleNewCompany} 
                className={showNewCompany ? 'button blue' : 'button green'}
            >
                {showNewCompany ? 'Cancel' : 'Add Company'}
            </button>
            
            {showNewCompany && (
                <div onClick={(e) => e.stopPropagation()}> 
                    <NewCompany 
                        contactId={contactId} 
                        setCompanies={setCompanies} 
                        onClose={toggleNewCompany} 
                    />
                </div>
            )}

            <table onClick={(e) => e.stopPropagation()}> 
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Company Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <Company
                            key={company.company_id}
                            company={company}
                            companies={companies}
                            setCompanies={setCompanies} 
                            contactId={contactId}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyList;
