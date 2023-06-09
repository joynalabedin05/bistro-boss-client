import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Foodcard = ({item}) => {
    const {user}= useContext(AuthContext)
    const {name, image, recipe, price, _id} = item;
    const [,refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const handleAddToCart = (item)=>{
        console.log(item);
        if(user && user.email){
        const cartItem = {menuItemId:_id, name, image, price, email: user.email};
        console.log(cartItem);
            fetch('https://bistro-boss-server-nine-xi.vercel.app/carts',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
                // refetch the cart to update the number of products
                refetch(); 
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'food adddedo to the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state :{from: location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute right-0 px-2 rounded mr-4 mt-4 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;