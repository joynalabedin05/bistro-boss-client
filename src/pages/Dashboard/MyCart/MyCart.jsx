import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/UseCart";
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | My cart</title>
            </Helmet>
            <div className="font-semi-bold flex justify-evenly ">
                <h3 className="text-3xl uppercase">Total Items: {cart.length}</h3>
                <h3 className="text-3xl uppercase">Total Price: {total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, i) => <tr
                                key={item._id}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-lg bg-red-600 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;