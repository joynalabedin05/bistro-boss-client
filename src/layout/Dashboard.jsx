import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link><FaHome /> Home</Link></li>
                    <li><Link><FaCalendarAlt /> Reservations</Link></li>
                    <li><Link><FaShoppingCart /> My Cart</Link></li>
                    <li><Link><FaWallet /> Payment History</Link></li>
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome /> Home</Link></li>
                    <li><Link to='menu'><FaWallet /> Payment History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;