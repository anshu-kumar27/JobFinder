import React from 'react';

const locations = ['Bengaluru', 'Karnataka', 'India', 'Pune'];

function Navbar({ selectedLocations = [], onLocationChange }) {
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updatedLocations;

        if (checked) {
            updatedLocations = [...selectedLocations, value];
        } else {
            updatedLocations = selectedLocations.filter((loc) => loc !== value);
        }

        onLocationChange(updatedLocations);
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">JobFinder</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className='text-base font-bold'>Location</summary>
                            <ul className="p-2 bg-base-100 rounded-box shadow space-y-1 font-medium">
                                {locations.map((location) => (
                                    <li key={location} className='font-medium'>
                                        <label className="label cursor-pointer justify-start gap-2">
                                            <input
                                                type="checkbox"
                                                value={location}
                                                checked={selectedLocations.includes(location)}
                                                onChange={handleCheckboxChange} 
                                                className="checkbox checkbox-sm "
                                            />
                                            <span>{location}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn btn-primary">Login</a>
            </div>
        </div>
    );
}

export default Navbar;
