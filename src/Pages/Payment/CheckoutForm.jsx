import { TextField } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlinePayment } from "react-icons/md";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useCarts from "../../Hooks/useCarts";

const CheckoutForm = ({ cart, total, quantity, setLayout, setSnackOpen }) => {
  const stripe = useStripe();
  const [carts, setCarts] = useCarts();
  const elements = useElements();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://kayi-tribe-restuarant.onrender.com/api/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: total }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: fullName,
            email: email,
            address: address,
            phone: phone,
          },
        },
      });

    if (confirmError) {
      // console.log("[ConfirmError]", confirmError);
      return;
    }
    // console.log("[paymentIntent]", paymentIntent);
    const order = {
      customer: fullName,
      email: email,
      address: address,
      phone: phone,
      food: cart.food,
      img: cart.foodImg,
      quantity: quantity,
      price: total,
    };
    fetch("https://kayi-tribe-restuarant.onrender.com/api/make-order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });

    fetch(`https://kayi-tribe-restuarant.onrender.com/api/cart/${cart._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingOrders = carts.filter((c) => c._id !== cart._id);
          setCarts(remainingOrders);
        }
      });
    setLayout(undefined);
    // setSnackOpen(true);
    toast.success("Order Placed!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setFullName(e.target.value)}
          name="name"
          color="warning"
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          size="small"
          sx={{ width: "100%", margin: "10px 0" }}
        />
        <TextField
          value={email}
          readonly="true"
          name="name"
          color="warning"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          sx={{ width: "100%", margin: "10px 0" }}
        />
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          name="address"
          color="warning"
          id="outlined-basic"
          label="Your Address"
          variant="outlined"
          size="small"
          sx={{ width: "100%", margin: "10px 0" }}
        />
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          color="warning"
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginTop: "10px", marginBottom: "20px" }}
        />
        <div className="border border-[#c2c1c1] p-3 rounded">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="flex items-center justify-center bg-[#F5C332] h-10 px-5 mr-5 w-full my-5 cursor-pointer"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          <MdOutlinePayment className="lg:mr-3" />
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
