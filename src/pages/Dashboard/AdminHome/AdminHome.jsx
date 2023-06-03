import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: stats={}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    return (
        <div className="w-full m-4">
            <h3 className="text-3xl">Welcome back ,{user.displayName}</h3>
        </div>
    );
};

export default AdminHome;