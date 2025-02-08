import { useState, useEffect } from "react";
import List from "./components/List";
import Forms from "./components/Forms";
import { getUsers } from "./services/api";

function App() {
    const [editingUser, setEditingUser] = useState(null);
    const [users, setUsers] = useState([]); // ✅ Store users

    const fetchUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data); // ✅ Update users state
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers(); // ✅ Fetch users when the component mounts
    }, []);

    return (
        <div>
            <h1>CRUD App</h1>
            <Forms editingUser={editingUser} setEditingUser={setEditingUser} fetchUsers={fetchUsers} />
            <List users={users} setEditingUser={setEditingUser} fetchUsers={fetchUsers} />
        </div>
    );
}

export default App;





// import { useState, useEffect } from "react";
// import List from "./components/List";
// import Forms from "./components/Forms";
// import { getUsers } from "./services/api";

// function App() {
//     const [editingUser, setEditingUser] = useState(null);
//     const [users, setUsers] = useState([]);

//     const fetchUsers = async () => {
//         try {
//             const res = await getUsers();
//             setUsers(res.data);
//         } catch (error) {
//             console.error("Error fetching users:", error);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div>
//             <h1>CRUD App</h1>
//             <Forms editingUser={editingUser} setEditingUser={setEditingUser} fetchUsers={fetchUsers} />
//             <List setEditingUser={setEditingUser} fetchUsers={fetchUsers} />
//         </div>
//     );
// }

// export default App;



// import { useState } from "react";
// import List from "./components/List";
// import Forms from "./components/Forms";

// function App() {
//     const [editingUser, setEditingUser] = useState(null);

//     return (
//         <div>
//             <h1>CRUD App</h1>
//             <Forms editingUser={editingUser} setEditingUser={setEditingUser} />
//             <List setEditingUser={setEditingUser} />
//         </div>
//     );
// }

// export default App;
