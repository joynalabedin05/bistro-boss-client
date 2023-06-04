import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet,FaCalendarAlt, FaUtensils, FaHome, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO load data gron the server
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054]">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils /> Add Items</NavLink></li>
                            
                            <li>
                                <NavLink to='/dashboard/manageitems'><FaWallet /> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'><FaBook /> Manage Bkooings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink>
                            </li>

                        </> :

                            <>
                                <li><NavLink to='/'><FaHome />User Home</NavLink></li>
                                <li><NavLink to='/'><FaCalendarAlt /> Reservations</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className="badge badge-secondary">{cart?.length || 0}</span></NavLink>

                                </li>
                                <li>
                                    <NavLink to='/'><FaWallet /> Payment History</NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;