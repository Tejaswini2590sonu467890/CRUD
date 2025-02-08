import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { addUser, updateUser } from "../services/api";

export default function UserForm({ editingUser, setEditingUser, fetchUsers }) {
    const [user, setUser] = useState({ name: "", email: "", phone: "" });

    useEffect(() => {
        setUser(editingUser || { name: "", email: "", phone: "" });
    }, [editingUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const trimmedUser = {
                name: user.name.trim(),
                email: user.email.trim(),
                phone: user.phone.trim(),
            };

            if (!trimmedUser.name || !trimmedUser.email || !trimmedUser.phone) {
                alert("All fields are required!");
                return;
            }

            if (editingUser) {
                await updateUser(editingUser.id, trimmedUser);
            } else {
                await addUser(trimmedUser);
            }

            fetchUsers(); // ✅ Refresh user list
            setUser({ name: "", email: "", phone: "" });
            setEditingUser(null);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center mb-4">{editingUser ? "Edit User" : "Add User"}</h2>
            <input 
                type="text" 
                placeholder="Name" 
                value={user.name} 
                onChange={(e) => setUser({ ...user, name: e.target.value })} 
                required 
                className="w-full p-2 mb-4 border rounded-md"
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={user.email} 
                onChange={(e) => setUser({ ...user, email: e.target.value })} 
                required 
                className="w-full p-2 mb-4 border rounded-md"
            />
            <input 
                type="text" 
                placeholder="Phone" 
                value={user.phone} 
                onChange={(e) => setUser({ ...user, phone: e.target.value })} 
                required 
                className="w-full p-2 mb-4 border rounded-md"
            />
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
            >
                {editingUser ? "Update User" : "Add User"}
            </button>
        </form>
    );
}

// ✅ Define PropTypes for Validation
UserForm.propTypes = {
    editingUser: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }), 
    setEditingUser: PropTypes.func.isRequired, 
    fetchUsers: PropTypes.func.isRequired, 
};





// import { useState, useEffect } from "react";
// import PropTypes from "prop-types"; // ✅ Import PropTypes
// import { addUser, updateUser } from "../services/api";

// export default function UserForm({ editingUser, setEditingUser, fetchUsers }) {
//     const [user, setUser] = useState({ name: "", email: "", phone: "" });

//     useEffect(() => {
//         setUser(editingUser || { name: "", email: "", phone: "" });
//     }, [editingUser]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const trimmedUser = {
//                 name: user.name.trim(),
//                 email: user.email.trim(),
//                 phone: user.phone.trim(),
//             };

//             if (!trimmedUser.name || !trimmedUser.email || !trimmedUser.phone) {
//                 alert("All fields are required!");
//                 return;
//             }

//             if (editingUser) {
//                 await updateUser(editingUser.id, trimmedUser);
//             } else {
//                 await addUser(trimmedUser);
//             }

//             fetchUsers();
//             setUser({ name: "", email: "", phone: "" });
//             setEditingUser(null);
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("Something went wrong. Please try again!");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
//             <h2 className="text-2xl font-bold text-center mb-4">{editingUser ? "Edit User" : "Add User"}</h2>
//             <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={user.name} 
//                 onChange={(e) => setUser({ ...user, name: e.target.value })} 
//                 required 
//                 className="w-full p-2 mb-4 border rounded-md"
//             />
//             <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={user.email} 
//                 onChange={(e) => setUser({ ...user, email: e.target.value })} 
//                 required 
//                 className="w-full p-2 mb-4 border rounded-md"
//             />
//             <input 
//                 type="text" 
//                 placeholder="Phone" 
//                 value={user.phone} 
//                 onChange={(e) => setUser({ ...user, phone: e.target.value })} 
//                 required 
//                 className="w-full p-2 mb-4 border rounded-md"
//             />
//             <button 
//                 type="submit" 
//                 className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
//             >
//                 {editingUser ? "Update User" : "Add User"}
//             </button>
//         </form>
//     );
// }

// // ✅ Define PropTypes for Validation
// UserForm.propTypes = {
//     editingUser: PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         email: PropTypes.string,
//         phone: PropTypes.string,
//     }), // `editingUser` can be an object or null
//     setEditingUser: PropTypes.func.isRequired, // Function to set editing user
//     fetchUsers: PropTypes.func.isRequired, // Function to refresh user list
// };











// import { useState, useEffect } from "react";
// import PropTypes from "prop-types"; // ✅ Import PropTypes
// import { addUser, updateUser } from "../services/api";

// export default function UserForm({ editingUser, setEditingUser, fetchUsers }) {
//     const [user, setUser] = useState({ name: "", email: "", phone: "" });

//     useEffect(() => {
//         setUser(editingUser || { name: "", email: "", phone: "" });
//     }, [editingUser]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const trimmedUser = {
//                 name: user.name.trim(),
//                 email: user.email.trim(),
//                 phone: user.phone.trim(),
//             };

//             if (!trimmedUser.name || !trimmedUser.email || !trimmedUser.phone) {
//                 alert("All fields are required!");
//                 return;
//             }

//             if (editingUser) {
//                 await updateUser(editingUser.id, trimmedUser);
//             } else {
//                 await addUser(trimmedUser);
//             }

//             fetchUsers();
//             setUser({ name: "", email: "", phone: "" });
//             setEditingUser(null);
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("Something went wrong. Please try again!");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={user.name} 
//                 onChange={(e) => setUser({ ...user, name: e.target.value })} 
//                 required 
//             />
//             <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={user.email} 
//                 onChange={(e) => setUser({ ...user, email: e.target.value })} 
//                 required 
//             />
//             <input 
//                 type="text" 
//                 placeholder="Phone" 
//                 value={user.phone} 
//                 onChange={(e) => setUser({ ...user, phone: e.target.value })} 
//                 required 
//             />
//             <button type="submit">{editingUser ? "Update" : "Add"} User</button>
//         </form>
//     );
// }

// // ✅ Define PropTypes for Validation
// UserForm.propTypes = {
//     editingUser: PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         email: PropTypes.string,
//         phone: PropTypes.string,
//     }), // `editingUser` can be an object or null
//     setEditingUser: PropTypes.func.isRequired, // Function to set editing user
//     fetchUsers: PropTypes.func.isRequired, // Function to refresh user list
// };






// import { useState, useEffect } from "react";
// import { addUser, updateUser } from "../services/api";

// export default function UserForm({ editingUser, setEditingUser, fetchUsers}) {
//     const [user, setUser] = useState({ name: "", email: "", phone: "" });

//     useEffect(() => {
//         setUser(editingUser || { name: "", email: "", phone: "" });
//     }, [editingUser]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const trimmedUser = {
//                 name: user.name.trim(),
//                 email: user.email.trim(),
//                 phone: user.phone.trim(),
//             };

//             if (!trimmedUser.name || !trimmedUser.email || !trimmedUser.phone) {
//                 alert("All fields are required!");
//                 return;
//             }

//             if (editingUser) {
//                 await updateUser(editingUser.id, trimmedUser);
//             } else {
//                 await addUser(trimmedUser);
//             }

//             fetchUsers();
//             setUser({ name: "", email: "", phone: "" });
//             setEditingUser(null);
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("Something went wrong. Please try again!");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={user.name} 
//                 onChange={(e) => setUser({ ...user, name: e.target.value })} 
//                 required 
//             />
//             <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={user.email} 
//                 onChange={(e) => setUser({ ...user, email: e.target.value })} 
//                 required 
//             />
//             <input 
//                 type="text" 
//                 placeholder="Phone" 
//                 value={user.phone} 
//                 onChange={(e) => setUser({ ...user, phone: e.target.value })} 
//                 required 
//             />
//             <button type="submit">{editingUser ? "Update" : "Add"} User</button>
//         </form>
//     );
// }




// import { useState, useEffect } from "react";
// import { addUser, updateUser } from "../services/api";

// export default function UserForm({ editingUser, setEditingUser, fetchUsers }) {
//     const [user, setUser] = useState({ name: "", email: "", phone: "" });

//     useEffect(() => {
//         if (editingUser) setUser(editingUser);
//     }, [editingUser]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (editingUser) {
//             await updateUser(editingUser.id, user);
//         } else {
//             await addUser(user);
//         }
//         fetchUsers();
//         setUser({ name: "", email: "", phone: "" });
//         setEditingUser(null);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Name" value={user.name} 
//                 onChange={(e) => setUser({ ...user, name: e.target.value })} required />
//             <input type="email" placeholder="Email" value={user.email} 
//                 onChange={(e) => setUser({ ...user, email: e.target.value })} required />
//             <input type="text" placeholder="Phone" value={user.phone} 
//                 onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
//             <button type="submit">{editingUser ? "Update" : "Add"} User</button>
//         </form>
//     );
// }








// import { useState, useEffect } from "react";
// import { addUser, updateUser } from "../services/api";

// export default function UserForm({ editingUser, setEditingUser, fetchUsers }) {
//     const [user, setUser] = useState({ name: "", email: "", phone: "" });

//     useEffect(() => {
//         if (editingUser) setUser(editingUser);
//     }, [editingUser]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (editingUser) {
//             await updateUser(editingUser.id, user);
//         } else {
//             await addUser(user);
//         }
//         fetchUsers();
//         setUser({ name: "", email: "", phone: "" });
//         setEditingUser(null);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Name" value={user.name} 
//                 onChange={(e) => setUser({ ...user, name: e.target.value })} required />
//             <input type="email" placeholder="Email" value={user.email} 
//                 onChange={(e) => setUser({ ...user, email: e.target.value })} required />
//             <input type="text" placeholder="Phone" value={user.phone} 
//                 onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
//             <button type="submit">{editingUser ? "Update" : "Add"} User</button>
//         </form>
//     );
// }
