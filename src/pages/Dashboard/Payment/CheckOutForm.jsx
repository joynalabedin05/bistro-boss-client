import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import './CheckoutForm.css'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckOutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [cardError, setCardError] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if(price> 0){
      axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
    }
    
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }
    // console.log('card', card);
    const { error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    if (error) {
      // console.log('error', error);
      setCardError(error.message);
    }
    else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }

    setProcessing(true);
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'annonymous',
            email: user?.email || 'unknown',
          },
        },
      },
    );

    if(confirmError){
      console.log(confirmError);
    }
    console.log('payment intent',paymentIntent);
    setProcessing(false);
    if(paymentIntent.status === "succeeded"){
      setTransactionId(paymentIntent.id);
      // save payment info to the server
      const payment  = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: 'service pending',
        quantity: cart.length,
        cartItems: cart.map(item=> item._id),
        menuItems: cart.map(item=> item.menuItemId),
        itemsNames: cart.map(item=> item.name),
      }
      axiosSecure.post('/payments', payment)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          // display confirm
        }
      })
    }

  }


  return (
    <div>
      <form className="w-2/3 m-7" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500 ml-4">{cardError}</p>
      }
      {
        transactionId && <p className="text-green-500 ml-4">Transaction complete with transaction Id: {transactionId}</p>
      }
    </div>
  );
};

export default CheckOutForm;