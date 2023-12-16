
import React, { useEffect, useState } from 'react';





const Companys = () => {
    const [companyData, setCompanyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        companyName: '',
        companyStatus: '1', // Default status
    });

    useEffect(() => {
        setLoading(true);
        const apiUrl = `http://139.59.35.127/production/propsoft-api/public/api/get-all-companys?company_status=${filter.companyStatus}&company_name=${filter.companyName}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setCompanyData(data);
                setLoading(false);
            });
    }, [filter]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
    };

    console.log(companyData);

    let { companys } = companyData;
    console.log("Companies:", companys);


    return (
        <>
            <div>
                <label>Company Name:</label>
                <input
                    type="text"
                    name="companyName"
                    value={filter.companyName}
                    onChange={handleFilterChange}
                />
                <label>Company Status:</label>
                <select
                    name="companyStatus"
                    value={filter.companyStatus}
                    onChange={handleFilterChange}
                >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>

            {loading ? <h1>Loading....</h1> : (
                <div>
                    



                    {companys && companys.data.map(company => (
                        <div key={company.id}>
                            <h1>{company.company_name}</h1>
                           
                        </div>
                    ))}


                </div>
            )}
        </>
    );
};

export default Companys;




