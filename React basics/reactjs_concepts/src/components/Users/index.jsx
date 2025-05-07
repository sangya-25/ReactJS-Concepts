import { useEffect, useState } from "react";

export default function Users() {
    const [userList, setuserList] = useState([]);
    const [error, setError] = useState(null);
    const [pending, setPending]=useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse = await fetch("http://dummyjson.com/users");
            const result = await apiResponse.json();
            if(result?.users){                 
                setuserList(result?.users)  
                setPending(false)           
            }else{                 
                setuserList([])    
                setPending(false)         
            }                      
        }catch (error) {
            console.error("Error fetching users:", error);
            setError("Failed to fetch users. Please try again.");
        }
    }
    function handlefetchListofUsers(){
        fetchAllUsers();
    }
    // useEffect(() => {
    //     fetchAllUsers();
    // },[]);
    if(pending) { return <h1>Fetching users! Please wait </h1>};
    return (
        <div>
            <h1>All Users List</h1>
            <button onClick={handlefetchListofUsers}>Fetch User List</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {userList && userList.length > 0 ? (
                    userList.map(userItem => (
                        <li key={userItem.id}>
                            <p>{userItem.firstName} {userItem.lastName}</p>
                        </li>
                    ))
                ) : (
                    <p>No user found. Please try again.</p>
                )}
            </ul>
        </div>
    );
}
