// import React, { useState, useEffect } from "react";

// const UserProfile = () => {
//   const [formData, setFormData] = useState({
//     userName: '',
//     email: '',
//     phone: '',
//     address: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const token = localStorage.getItem("token");
  
//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await fetch('/api/auth/profile', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
  
//         setFormData({
//           userName: data.user.username ?? '',
//           email: data.user.email ?? '',
//           phone: data.user.phone ?? '',
//           address: data.user.address ?? '',
//         });
  
//         console.log('Fetched user data:', data);
  
//       } catch (error) {
//         console.error("Failed to fetch user data", error);
//       }
//     }
  
//     if (token) {
//       fetchUserData();
//     }
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/edit-profile', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Profile updated successfully!');
//         setIsEditing(false);
//       } else {
//         alert('Failed to update profile.');
//       }
//     } catch (error) {
//       console.error('Update error:', error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <button
//         onClick={() => setIsEditing((prev) => !prev)}
//         className=" rounded-md bg-rose-600 px-4 py-2 text-white hover:bg-rose-500"
//       >
//         {isEditing ? 'Cancel' : 'Edit'}
//       </button>

//       <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">

//           {/* User Name */}
//           <div>
//             <label htmlFor="userName" className="block text-sm font-semibold text-gray-800">
//               User Name
//             </label>
//             <input
//               id="userName"
//               name="userName"
//               type="text"
//               value={formData.userName}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500"
//             />
//           </div>

//           {/* Email */}
//           <div className="sm:col-span-2">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               disabled
//               className="mt-2 block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-800 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500"
//             />
//           </div>

//           {/* Phone */}
//           <div className="sm:col-span-2">
//             <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">
//               Phone Number
//             </label>
//             <input
//               id="phone"
//               name="phone"
//               type="text"
//               placeholder="98765 43210"
//               value={formData.phone}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500"
//             />
//           </div>

//           {/* Address */}
//           <div className="sm:col-span-2">
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-800">
//               Address
//             </label>
//             <input
//               id="address"
//               name="address"
//               type="text"
//               value={formData.address}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500"
//             />
//           </div>

//         </div>

//         {isEditing && (
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500"
//             >
//               Save
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default UserProfile;

import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setFormData({
          userName: data.user.username ?? "",
          email: data.user.email ?? "",
          phone: data.user.phone ?? "",
          address: data.user.address ?? "",
        });
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    }
    if (token) fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/edit-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Profile updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 h-screen w-screen"
    >
      {/* Profile Header */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6"
      >
        <motion.div 
          whileHover={{ rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
          />
          {isEditing && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-2 -right-2 bg-red-800 text-white p-1 rounded-full cursor-pointer"
            >
              <PencilSquareIcon className="w-5 h-5" />
            </motion.div>
          )}
        </motion.div>
        
        <div className="text-center sm:text-left">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl sm:text-3xl font-bold text-gray-800"
          >
            {formData.userName || "User Name"}
          </motion.h1>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-gray-600 mt-1"
          >
            {formData.email}
          </motion.p>
        </div>
      </motion.div>

      {/* Personal Information */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-[90%] bg-white shadow-lg rounded-xl p-6 space-y-6"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <UserIcon className="w-6 h-6 text-red-800" />
            Personal Information
          </h3>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <UserIcon className="w-4 h-4 text-gray-500" />
              User Name
            </label>
            <input
              name="userName"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-lg transition-all ${
                isEditing 
                  ? "bg-white border-red-300 focus:ring-2 focus:ring-red-200" 
                  : "bg-gray-50 border-gray-200"
              }`}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center gap-1">
              <EnvelopeIcon className="w-4 h-4 text-gray-500" />
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              disabled
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center gap-1">
              <PhoneIcon className="w-4 h-4 text-gray-500" />
              Phone Number
            </label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-lg transition-all ${
                isEditing 
                  ? "bg-white border-red-300 focus:ring-2 focus:ring-red-200" 
                  : "bg-gray-50 border-gray-200"
              }`}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <MapPinIcon className="w-4 h-4 text-gray-500" />
              Address
            </label>
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-lg transition-all ${
                isEditing 
                  ? "bg-white border-red-300 focus:ring-2 focus:ring-red-200" 
                  : "bg-gray-50 border-gray-200"
              }`}
            />
            {!isEditing ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="bg-red-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <PencilSquareIcon className="w-5 h-5" />
                <span>Edit</span>
              </motion.button>
            ) : (
              <div className="flex gap-2 mt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <XMarkIcon className="w-5 h-5" />
                  <span>Cancel</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="bg-red-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <CheckIcon className="w-5 h-5" />
                  <span>Save</span>
                </motion.button>
              </div>
            )}
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default UserProfile;
