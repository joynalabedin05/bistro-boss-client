import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const [menu, ,refetch] = UseMenu();
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/menu/${item._id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    refetch();
                    Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                }
                // console.log('deleted response',res.data);
            })
            }
          })
    }
    return (
        <div className="w-full">
            <SectionTitle heading='Manage all Items' subHeading='Hurry up'></SectionTitle>
            <div className="overflow-x-auto ml-4">
                <table className="table">
                    <thead>
                        <tr>
                            <td>
                                #
                            </td>

                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, i) => <tr key={item._id}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name} </div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-right">${item.price} </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;