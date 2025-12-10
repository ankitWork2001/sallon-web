import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
const AdminAiHairStyle = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
                <div className="max-w-3xl w-full">

                    {/* Back Button */}
                    <button className="flex items-center gap-2 text-purple-600 font-medium mb-4">
                        <FaArrowLeft className="text-sm" />
                        Back to Dashboard
                    </button>

                    {/* Main Container */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center">

                        {/* Icon */}
                        <div className="w-14 h-14 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-5">
                            <IoIosQrScanner size={26} />
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            AI Hairstyle Scanner          </h1>

                        {/* Description */}
                        <p className="text-gray-600 max-w-xl mx-auto mb-6">
                            To use AI Hairstyle Scanner feature, you need to connect your OpenAI APL Key in the Integrations panel. this will enable AI- powered hairstyle recommendations based on face shape analysis
                        </p>

                        {/* How it works box */}
                        <div className="bg-purple-50 p-4 rounded-xl max-w-2xl mx-auto text-sm text-gray-700">
                            <p>
                                <span className="font-semibold">How it works:</span>  Once enabled, you will be able to upload client photos, get AI-powered hairstyle suggestions based on face shape, and preview styles before the haircut.
                            </p>
                            <p className="mt-2 text-purple-600 font-medium">
                                Please connect your OpenAI API Key in the Integrations panel to get started.            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAiHairStyle
