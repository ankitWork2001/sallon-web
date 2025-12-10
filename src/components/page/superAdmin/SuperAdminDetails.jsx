import React from "react";
import { useLocation, useParams } from "react-router-dom";
const SuperAdminDetails = () => {
    const { state } = useLocation();
    const salon = state?.salon;
    if (!salon) return <p>No Data Found</p>;
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl font-bold">{salon.shopName}</h1>

                <p><strong>Owner:</strong> {salon?.owner?.name}</p>
                <p><strong>Contact:</strong> {salon?.contactNumber}</p>
                <p><strong>Staff:</strong> {salon?.numberOfStaff}</p>
                <p><strong>Address:</strong> {salon?.location?.address}</p>

                <pre className="bg-gray-100 p-3 mt-4 rounded">
                    {JSON.stringify(salon, null, 2)}
                </pre>
            </div>
        </div>
    )
}

export default SuperAdminDetails
