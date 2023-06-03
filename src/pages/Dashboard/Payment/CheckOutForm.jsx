import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [cardError, setCardError] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
  }, []);

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
      // todo next <steps
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