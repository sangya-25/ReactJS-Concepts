import { useEffect, useState } from "react"

function ApiCallTest(){
    const [users, setUsers]=useState(null);
    const [isloading, setLoading]=useState(true);
    useEffect(()=>{
        async function fetchUsers(){
            try{
                const apiResponse= await fetch('https://jsonplaceholder.typicode.com/users')
                const result=await apiResponse.json();
                setUsers(result);
                setLoading(false);
            }catch(error){
                console.log(error);
            }
        }
        fetchUsers();
    },[])
    console.log(users,isloading)
    return(
        <div>
            {
                isloading? (
                    <h1>loading data...</h1>) :
                    (<ul>
                        {
                            users.map((user)=> <li key={user.id}>{user?.name}</li>)
                        }
                    </ul>)
            }
        </div>
    )
}
export default ApiCallTest;