import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const {data: users=[]} = useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
            <h3>all users: {users.length}</h3>

        </div>
    );
};

export default AllUsers;