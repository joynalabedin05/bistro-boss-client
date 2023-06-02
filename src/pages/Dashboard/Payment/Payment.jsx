import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

// todo provide publish able key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='please provide' heading='Payment'></SectionTitle>
           <h4 className="class text-3xl">taka taka tumi uira uira aso </h4>
           <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements> 
           
        </div>
    );
};

export default Payment;