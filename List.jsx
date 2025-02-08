import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUsers, deleteUser } from "../services/api";

export default function UserList({ setEditingUser }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg">
            
            <table className="min-w-full border-collapse border border-gray-300">
              
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                            <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                                <button 
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    onClick={() => setEditingUser(user)}
                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ✅ Define PropTypes for Validation
UserList.propTypes = {
    setEditingUser: PropTypes.func.isRequired,
};








// import { useEffect, useState } from "react";
// import PropTypes from "prop-types"; // ✅ Import PropTypes
// import { getUsers, deleteUser } from "../services/api";

// export default function UserList({ setEditingUser }) {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const res = await getUsers();
//             setUsers(res.data);
//         } catch (error) {
//             console.error("Error fetching users:", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteUser(id);
//             fetchUsers();
//         } catch (error) {
//             console.error("Error deleting user:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>User List</h2>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.phone}</td>
//                             <td>
//                                 <button onClick={() => setEditingUser(user)}>Edit</button>
//                                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// // ✅ Define PropTypes for Validation
// UserList.propTypes = {
//     setEditingUser: PropTypes.func.isRequired, // Ensures setEditingUser is a required function
// };




// import { useEffect, useState } from "react";
// import { getUsers, deleteUser } from "../services/api";

// export default function UserList({ setEditingUser }) {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         const res = await getUsers();
//         setUsers(res.data);
//     };

//     const handleDelete = async (id) => {
//         await deleteUser(id);
//         fetchUsers();
//     };

//     return (
//         <div>
//             <h2>User List</h2>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.phone}</td>
//                             <td>
//                                 <button onClick={() => setEditingUser(user)}>Edit</button>
//                                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
