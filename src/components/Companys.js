
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
            {/* <div>
                <label>Company Name:</label>
                <input
                    placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"
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
            </div> */}
            <div>
            <h1 className='text-center text-gray-700 uppercase font-bold text-xl mt-4'>Task-2</h1>
            </div>

            <div className='mb-10 gap-3 px-20 py-5'>
                <label className='text-xs text-gray-700 uppercase font-bold'>Filtered by Company Name: </label>
                <input
                    placeholder="Type here" className="input input-bordered w-full max-w-xs m-4"
                    type="text"
                    name="companyName"
                    value={filter.companyName}
                    onChange={handleFilterChange}
                />
                <label className='text-xs text-gray-700 uppercase font-bold '>Company Status: </label>
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
                <div class="relative overflow-x-auto px-20 ">



                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Company Logo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Company Phone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Address 1
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Zip Code
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    City
                                </th>
                            </tr>
                        </thead>


                        <tbody>
                            {companys && companys.data.map(company => (
                                // <div key={company.id}>
                                //     <h1>{company.company_name}</h1>
                                //     <h1>{company.company_phone}</h1>

                                // </div>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {company.id}
                                    </th>
                                    <td class="px-6 py-4">

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={company.company_logo_link} alt="Avatar Tailwind CSS Component" />
                                            </div>

                                        </div>

                                    </td>
                                    <td class="px-6 py-4">
                                        {company.company_name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {company.company_phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        {company.address1}
                                    </td>
                                    <td class="px-6 py-4">
                                        {company.zip}
                                    </td>
                                    <td class="px-6 py-4">
                                        {company.city}
                                    </td>
                                </tr>
                            ))}


                        </tbody>







                    </table>






                </div>
            )}
        </>
    );
};

export default Companys;




