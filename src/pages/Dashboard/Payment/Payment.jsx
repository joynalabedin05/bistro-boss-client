import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/UseCart";

// todo provide publish able key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
// console.log(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum+item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading='please provide' heading='Payment'></SectionTitle>
           <h4 className="class text-3xl">taka taka tumi uira uira aso </h4>
           <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements> 
           
        </div>
    );
};

export default Payment;